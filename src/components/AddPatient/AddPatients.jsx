import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

export default function PatientForm({ goToStepper = () => {}, exitStepper = () => {} }) {
    // State variables for each patient field
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [building, setBuilding] = useState('');
    const [street, setStreet] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [mode, setMode] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [errors, setErrors] = useState({});

    // Options for Dropdowns
    const statusOptions = [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
    ];
    const modeOptions = [
        { label: 'Out', value: 'Out' },
        { label: 'Admit', value: 'Admit' },
    ];
    const genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ];

    // Handle form submission
    const handleSubmit = async () => {
        const newErrors = {};

        // Validate all fields
        if (!name) newErrors.name = 'Name is required';
        if (!phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        if (!email) newErrors.email = 'Email is required';
        if (!status) newErrors.status = 'Status is required';
        if (!building || !street || !area || !city || !pincode) {
            newErrors.address = 'Complete address is required (building, street, area, city, pincode)';
        }
        if (!mode) newErrors.mode = 'Mode is required';
        if (!age) {
            newErrors.age = 'Age is required';
        } else if (isNaN(age) || age <= 0 || age > 120) {
            newErrors.age = 'Age must be a valid number between 1 and 120';
        }
        if (!gender) newErrors.gender = 'Gender is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            alert('Please fill in all required fields.');
            return;
        }

        const patientData = {
            p_name: name,
            p_number: phone,
            p_email: email,
            p_status: status,
            p_address: {
                building,
                street,
                area,
                city,
                pincode,
            },
            p_mode: mode,
            p_age: parseInt(age, 10),
            p_gender: gender,
        };

        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                alert("Authorization token is missing. Please log in again.");
                return;
            }

            const response = await axios.post('http://localhost:8080/api/details/patientDetails', patientData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

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
                alert(`Error: ${error.response.data.message || 'Failed to submit form.'}`);
            } else {
                alert('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="bg-rec_bac min-h-screen max-w-full">
            <div className="w-full p-36">
                <h1 className="text-2xl font-bold mb-6 bg-rec_bac">Add Patient Details</h1>
                <div className="inline h-screen overflow-hidden w-full bg-rec_bac">
                    <div className='w-full h-full max-h-[100vh] overflow-y-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-6'>
                    
                        <div>
                            <label className="text-lg font-medium text-gray-700">Full Name:</label>
                            <InputText
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full h-10 mt-2 border rounded"
                                placeholder="Enter full name"
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="text-lg font-medium text-gray-700">Phone Number:</label>
                            <InputText
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full h-10 mt-2 border rounded"
                                placeholder="Enter phone number"
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-lg font-medium text-gray-700">Email:</label>
                            <InputText
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-10 mt-2 border rounded"
                                placeholder="Enter email address"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </div>

                        {/* Status */}
                        <div>
                            <label className="text-lg font-medium text-gray-700">Status:</label>
                            <Dropdown
                                value={status}
                                options={statusOptions}
                                onChange={(e) => setStatus(e.value)}
                                className="w-full h-10 mt-2 border rounded"
                                placeholder="Select status"
                            />
                            {errors.status && <span className="text-red-500 text-sm">{errors.status}</span>}
                        </div>

                        {/* Address - Split into building, street, area, city, pincode */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-lg font-medium text-gray-700">Building Number:</label>
                                <InputText
                                    value={building}
                                    onChange={(e) => setBuilding(e.target.value)}
                                    className="w-full h-10 mt-2 border rounded"
                                    placeholder="Enter building number"
                                />
                            </div>
                            <div>
                                <label className="text-lg font-medium text-gray-700">Street:</label>
                                <InputText
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    className="w-full h-10 mt-2 border rounded"
                                    placeholder="Enter street"
                                />
                            </div>
                            <div>
                                <label className="text-lg font-medium text-gray-700">Area:</label>
                                <InputText
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                    className="w-full h-10 mt-2 border rounded"
                                    placeholder="Enter area"
                                />
                            </div>
                            <div>
                                <label className="text-lg font-medium text-gray-700">City:</label>
                                <InputText
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full h-10 mt-2 border rounded"
                                    placeholder="Enter city"
                                />
                            </div>
                            <div>
                                <label className="text-lg font-medium text-gray-700">Pincode:</label>
                                <InputText
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    className="w-full h-10 mt-2 border rounded"
                                    placeholder="Enter pincode"
                                />
                            </div>
                        </div>
                        {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}

                        {/* Mode */}
                        <div>
                            <label className="text-lg font-medium text-gray-700">Mode:</label>
                            <Dropdown
                                value={mode}
                                options={modeOptions}
                                onChange={(e) => setMode(e.value)}
                                className="w-full h-10 mt-2 border rounded"
                                placeholder="Select mode"
                            />
                            {errors.mode && <span className="text-red-500 text-sm">{errors.mode}</span>}
                        </div>

                        {/* Age */}
                        <div>
                            <label className="text-lg font-medium text-gray-700">Age:</label>
                            <InputText
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full h-10 mt-2 border rounded"
                                placeholder="Enter age"
                            />
                            {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="text-lg font-medium text-gray-700">Gender:</label>
                            <Dropdown
                                value={gender}
                                options={genderOptions}
                                onChange={(e) => setGender(e.value)}
                                className="w-full h-10 mt-2 border rounded"
                                placeholder="Select gender"
                            />
                            {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
                        </div>

                        <div className="flex justify-end space-x-4 mt-6">
                            <Button
                                label="Exit"
                                className="p-button-danger"
                                onClick={exitStepper}
                            />
                            <Button
                                label="Next"
                                className="p-button-success"
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
