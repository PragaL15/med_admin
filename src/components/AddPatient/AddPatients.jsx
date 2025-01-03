import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import axios from "axios";

export default function PatientForm({
  goToStepper = () => {},
  exitStepper = () => {},
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [pincode, setPincode] = useState("");
  const [mode, setMode] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState(""); // Date of Birth state
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const handleSubmit = async () => {
    const newErrors = {};

    // Validations
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!email) newErrors.email = "Email is required";
    if (!street) newErrors.street = "Street is required";
    if (!town) newErrors.town = "Town is required";
    if (!pincode) newErrors.pincode = "Pincode is required";
    if (!age) {
      newErrors.age = "Age is required";
    } else if (isNaN(age) || age <= 0 || age > 120) {
      newErrors.age = "Age must be a valid number between 1 and 120";
    }
    // if (!dob) {
    //     newErrors.dob = "Date of Birth is required";
    // }
    if (!gender) newErrors.gender = "Gender is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      alert("Please fill in all required fields.");
      return;
    }
    const formattedDob = new Date(dob).toISOString().split("T")[0];
    // Data object for submission
    const patientData = {
      p_name: `${firstName} ${lastName}`, // Combined first and last name
      p_number: phone,
      p_email: email,
      p_address: `${street}, ${town}, ${pincode}`, // Combined address fields into one string
      p_age: parseInt(age, 10),
      p_gender: gender,
      date_of_birth: formattedDob, // Directly use the dob without formatting
    };

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("Authorization token is missing. Please log in again.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/api/details/patientDetails",
        patientData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        goToStepper();
        alert("Form submitted successfully");
        window.location.reload();
      } else {
        alert(`Failed to add patient. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Error adding patient:", error);
      if (error.response) {
        alert(
          `Error: ${error.response.data.message || "Failed to submit form."}`
        );
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
      <div className="w-full p-6 bg-rec_bac ">
      <h1 className="text-2xl font-bold mb-6 ">Add Patient Details</h1>
  <div className="w-full max-h-96 p-6 border rounded-lg shadow-lg space-y-6 bg-Add_details_bac overflow-y-auto">
        <div className="flex">
          <div className="ml-4 w-1/2">
            <label className="label-class">First Name:</label>
            <InputText
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-class-inp"
              placeholder="Enter first name"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>
          <div className="ml-4 w-1/2">
            <label className="label-class">Last Name:</label>
            <InputText
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-class-inp"
              placeholder="Enter last name"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>
        </div>

        {/* Phone and Email */}
        <div className="flex">
          <div className="ml-4 w-1/2">
            <label className="label-class">Phone Number:</label>
            <InputText
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-class-inp"
              placeholder="Enter phone number"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
          <div className="ml-4 w-1/2">
            <label className="label-class">Email:</label>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-class-inp"
              placeholder="Enter email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="ml-4 w-1/3">
            <label className="label-class">Street:</label>
            <InputText
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="input-class-inp"
              placeholder="Enter street"
            />
            {errors.street && (
              <span className="text-red-500 text-sm">{errors.street}</span>
            )}
          </div>
          <div className="ml-4 w-1/3">
            <label className="label-class">Town:</label>
            <InputText
              value={town}
              onChange={(e) => setTown(e.target.value)}
              className="input-class-inp"
              placeholder="Enter town"
            />
            {errors.town && (
              <span className="text-red-500 text-sm">{errors.town}</span>
            )}
          </div>
          <div className="ml-4 w-1/3">
            <label className="label-class">Pincode:</label>
            <InputText
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="input-class-inp"
              placeholder="Enter pincode"
            />
            {errors.pincode && (
              <span className="text-red-500 text-sm">{errors.pincode}</span>
            )}
          </div>
        </div>

        {/* Age and DOB */}
        <div className="flex">
          <div className="ml-4 w-1/2">
            <label className="label-class">Age:</label>
            <InputText
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input-class-inp"
              placeholder="Enter age"
            />
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age}</span>
            )}
          </div>
          <div className="ml-4 w-1/2">
            <label className="label-class">Date of Birth:</label>
            <InputText
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="input-class-inp"
              placeholder="Enter DOB (YYYY-MM-DD)"
              type="date" // Use the date input type for better date handling
            />
            {errors.dob && (
              <span className="text-red-500 text-sm">{errors.dob}</span>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="ml-4 w-1/3">
            <label className="label-class">Gender:</label>
            <Dropdown
              value={gender}
              options={genderOptions}
              onChange={(e) => setGender(e.value)}
              className="input-class-drop"
              placeholder="Select gender"
            />
            {errors.gender && (
              <span className="text-red-500 text-sm">{errors.gender}</span>
            )}
          </div>
          <div className="ml-4 w-1/3">
            <label className="label-class">Occupation:</label>
            <InputText
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input-class-inp"
              placeholder="Enter age"
            />
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age}</span>
            )}
          </div>
          <div className="ml-4 w-1/3">
            <label className="label-class">Languages Spoken:</label>
            <InputText
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input-class-inp"
              placeholder="Enter age"
            />
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age}</span>
            )}
          </div>
        </div>
    
      </div>
      <Button
        label="Submit"
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-2 mt-4 mb-4 rounded-md hover:bg-blue-600 w-24"
      />
    </div>
  );
}
