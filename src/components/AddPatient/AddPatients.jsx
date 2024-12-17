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
    const [address, setAddress] = useState('');
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
        if (!address) newErrors.address = 'Address is required';
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
            p_address: address,
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
        <div className="w-full p-6 bg-transparent">
            <h1 className="text-2xl font-bold mb-6">Add Patient Details</h1>
            <div className="inline h-screen bg-white overflow-hidden w-full">
                <div className='w-full h-full max-h-[100vh] overflow-y-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-6'>
                    <div>
                        <label className="text-lg font-medium text-gray-700">Name:</label>
                        <InputText
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-10 mt-2 border rounded ml-2"
                            placeholder="Enter patient name"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    </div>
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
                    <div>
                        <label className="text-lg font-medium text-gray-700">Address:</label>
                        <InputText
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full h-10 mt-2 border rounded"
                            placeholder="Enter address"
                        />
                        {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
                    </div>
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
                    <Button
                        label="Proceed"
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600 w-24"
                    />
                </div>
            </div>
        </div>
    );
}
