import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axiosInstance from '../axiosInstance';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        p_id: '',
        app_date: '',
        time: '',
        p_health: '',
        d_id: '',
        problem_hint: '',
        appo_status: 'initiated',
    });
    const [error, setError] = useState(null);
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/api/appointments/doctors-patients');
                setPatients(response.data.patients);
                setDoctors(response.data.doctors);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to fetch patients or doctors data.');
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'app_date') {
            const [date, time] = value.split('T');
            setFormData((prev) => ({
                ...prev,
                app_date: date || '',
                time: time || '',
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const validateForm = () => {
        const { p_id, app_date, time, d_id } = formData;

        if (!p_id || !app_date || !time || !d_id) {
            setError('Please fill all required fields.');
            return false;
        }

        setError(null);
        return true;
    };

    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`; // Convert to dd-mm-yyyy format
    };

    const formatTime = (time) => {
        if (time) {
            const [hours, minutes] = time.split(':');
            return `${hours}:${minutes}:00`; // Ensure time is in hh:mm:ss format
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const formattedDate = formatDate(formData.app_date);
        const formattedTime = formatTime(formData.time);

        try {
            const response = await axiosInstance.post('/api/appointments/create', {
                ...formData,
                app_date: formattedDate,
                time: formattedTime,
            });

            if (response.status === 201) {
                alert('Appointment created successfully');
                setFormData({
                    p_id: '',
                    app_date: '',
                    time: '',
                    p_health: '',
                    d_id: '',
                    problem_hint: '',
                    appo_status: 'initiated',
                });
            }
        } catch (err) {
            console.error('Error creating appointment:', err.response ? err.response.data : err.message);
            setError('Failed to create appointment. Please try again.');
        }
    };

    return (
        <div className="w-full p-4 bg-transparent inline">
         <h2 className="text-2xl mb-4 mt-10">Create New Appointment</h2>
         <div className="inline  h-screen bg-white overflow-hidden w-full">
                <div className='w-full  max-h-[100vh] overflow-y-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg '>
          {error && <div className="mb-4 text-red-600">{error}</div>}
      
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <label className="text-lg font-medium text-gray-700 w-60">Patient:</label>
              <Dropdown
                value={formData.p_id}
                options={patients.map((patient) => ({
                  label: `${patient.p_name} - ${patient.p_id}`,
                  value: patient.p_id,
                }))}
                onChange={(e) => setFormData((prev) => ({ ...prev, p_id: e.value }))}
                name="p_id"
                className="w-full h-10 mt-2 border rounded"
                placeholder="Select patient"
              />
            </div>
      
            <div className="flex items-center space-x-4 mb-4">
              <label className="text-lg font-medium text-gray-700 w-60">Appointment Date & Time:</label>
              <input
                type="datetime-local"
                value={formData.app_date && formData.time ? `${formData.app_date}T${formData.time}` : ''}
                onChange={handleChange}
                name="app_date"
                className="w-full h-10 mt-2 border rounded"
                placeholder="Select appointment date and time"
              />
            </div>
      
            <div className="flex items-center space-x-4 mb-4">
              <label className="text-lg font-medium text-gray-700 w-60">Patient Health Status:</label>
              <InputText
                value={formData.p_health}
                onChange={(e) => setFormData((prev) => ({ ...prev, p_health: e.target.value }))}
                name="p_health"
                className="w-full h-10 mt-2 border rounded"
                placeholder="Enter patient health status"
              />
            </div>
      
            <div className="flex items-center space-x-4 mb-4">
              <label className="text-lg font-medium text-gray-700 w-60">Doctor:</label>
              <Dropdown
                value={formData.d_id}
                options={doctors.map((doctor) => ({
                  label: `${doctor.d_name} - ${doctor.d_id}`,
                  value: doctor.d_id,
                }))}
                onChange={(e) => setFormData((prev) => ({ ...prev, d_id: e.value }))}
                name="d_id"
                className="w-full h-10 mt-2 border rounded"
                placeholder="Select doctor"
              />
            </div>
      
            <div className="flex items-center space-x-4 ">
              <label className="text-lg font-medium text-gray-700 w-60">Problem Hint:</label>
              <InputText
                value={formData.problem_hint}
                onChange={(e) => setFormData((prev) => ({ ...prev, problem_hint: e.target.value }))}
                name="problem_hint"
                className="w-full h-10 mt-2 border rounded"
                placeholder="Enter problem hint"
              />
            </div>
           
          </form>
        </div>
        <Button
              label="Create Appointment"
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600"
            />
        </div>

     
      </div>
      
    );
};

export default AppointmentForm;
