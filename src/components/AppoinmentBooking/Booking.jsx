import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axiosInstance from '../axiosInstance';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        p_id: '',
        app_date: '',
        p_health: '',
        d_id: '',
        time: '',
        problem_hint: '',
        appo_status: 'initiated' 
    });
    const [error, setError] = useState(null);
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);

    // Fetch patients and doctors from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('api/appointments/doctors-patients');
                console.log(response.data); 
                setPatients(response.data.patients);
                setDoctors(response.data.doctors);
            } catch (error) {
                console.error("Error fetching data", error);
                setError('Failed to fetch patients or doctors data.');
            }
        };
    
        fetchData();
    }, []);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if form data is valid
        if (!formData.p_id || !formData.d_id || !formData.app_date || !formData.time) {
            setError('Please fill all required fields.');
            return;
        }

        try {
            console.log("Form data before submitting:", formData); // Log formData for debugging
            
            const response = await axiosInstance.post('/api/appointments/create', formData);

            if (response.status === 201) {
                alert("Appointment created successfully");
                setFormData({
                    p_id: '',
                    app_date: '',
                    p_health: '',
                    d_id: '',
                    time: '',
                    problem_hint: '',
                    appo_status: 'initiated'
                });
            }
        } catch (error) {
            console.error("Error creating appointment:", error.response ? error.response.data : error.message);
            setError("Failed to create appointment. Please try again.");
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xl mx-auto">
            <h2 className="text-2xl mb-4">Create New Appointment</h2>
            {error && <div className="mb-4 text-red-600">{error}</div>}

            <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="text-lg font-medium text-gray-700">Patient:</label>
                    <Dropdown
                        value={formData.p_id}
                        options={patients.map((patient) => ({
                            label: `${patient.p_name} - ${patient.PID}`,  // Display patient name and ID
                            value: patient.PID  // Patient ID as the value
                        }))}
                        onChange={handleChange}
                        name="p_id"
                        className="w-full h-10 mt-2 border rounded"
                        placeholder="Select patient"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-lg font-medium text-gray-700">Appointment Date:</label>
                    <InputText
                        value={formData.app_date}
                        onChange={handleChange}
                        name="app_date"
                        className="w-full h-10 mt-2 border rounded"
                        placeholder="Enter appointment date (YYYY-MM-DD)"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-lg font-medium text-gray-700">Patient Health Status:</label>
                    <InputText
                        value={formData.p_health}
                        onChange={handleChange}
                        name="p_health"
                        className="w-full h-10 mt-2 border rounded"
                        placeholder="Enter patient health status"
                    />
                </div>

                 <div className="mb-4">
                    <label className="text-lg font-medium text-gray-700">Doctor:</label>
                    <Dropdown
                        value={formData.d_id}
                        options={doctors.map((doctor) => ({
                            label: `${doctor.d_name} - ${doctor.DID}`, // Display doctor name and ID
                            value: doctor.DID // Doctor ID as the value
                        }))}
                        onChange={handleChange}
                        name="d_id"
                        className="w-full h-10 mt-2 border rounded"
                        placeholder="Select doctor"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-lg font-medium text-gray-700">Time:</label>
                    <InputText
                        value={formData.time}
                        onChange={handleChange}
                        name="time"
                        className="w-full h-10 mt-2 border rounded"
                        placeholder="Enter appointment time"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-lg font-medium text-gray-700">Problem Hint:</label>
                    <InputText
                        value={formData.problem_hint}
                        onChange={handleChange}
                        name="problem_hint"
                        className="w-full h-10 mt-2 border rounded"
                        placeholder="Enter problem hint"
                    />
                </div>

                <Button
                    label="Create Appointment"
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600"
                />
            </form>
        </div>
    );
};

export default AppointmentForm;
