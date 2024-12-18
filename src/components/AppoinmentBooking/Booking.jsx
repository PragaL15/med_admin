import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
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
    const [showCalendar, setShowCalendar] = useState(false); // To show/hide the calendar
    const [tempDateTime, setTempDateTime] = useState(null); // Temporary state for selected date and time

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
        return `${day}-${month}-${year}`; 
    };

    const formatTime = (time) => {
        if (time) {
            const [hours, minutes] = time.split(':');
            return `${hours}:${minutes}:00`; 
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

    const handleCalendarChange = (value) => {
        setTempDateTime(value); 
    };

    const handleConfirm = () => {
        if (tempDateTime) {
            const selectedDate = tempDateTime.toISOString().split('T')[0];
            const selectedTime = tempDateTime.toTimeString().split(' ')[0];
            setFormData((prev) => ({
                ...prev,
                app_date: selectedDate,
                time: selectedTime,
            }));
            setShowCalendar(false); 
        }
    };
  
    return (
        <div className="w-full p-4 bg-transparent inline">
            <h2 className="text-2xl font-bold mb-4 mt-10">Create New Appointment</h2>
            <div className="inline h-screen bg-white overflow-hidden w-full">
                <div className="w-full max-h-96 overflow-y-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {error && <div className="mb-4 text-red-600">{error}</div>}

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div className="ml-4">
                            <label className="label-class">Patient Name:</label>
                            <Dropdown
                                value={formData.p_id}
                                options={patients.map((patient) => ({
                                    label: `${patient.p_name} - ${patient.p_id}`,
                                    value: patient.p_id,
                                }))}
                                onChange={(e) => setFormData((prev) => ({ ...prev, p_id: e.value }))}
                                name="p_id"
                                className="input-class-drop"
                                placeholder="Select patient"
                            />
                        </div>

                        <div className="ml-4">
                            <label className="label-class">Appointment Date & Time:</label>
                            <div className="flex items-center relative w-full">
                                <InputText
                                    type="text"
                                    value={formData.app_date && formData.time ? `Date: ${formData.app_date} Time: ${formData.time}` : ''}
                                    onFocus={() => setShowCalendar(true)} // Show calendar when clicked
                                    readOnly
                                    className="input-class-inp"
                                />
                                {showCalendar && (
                                    <div className="absolute top-10 left-0 bg-white inline">
                                        <Calendar
                                            value={tempDateTime || (formData.app_date && formData.time ? new Date(`${formData.app_date}T${formData.time}`) : null)}
                                            onChange={(e) => handleCalendarChange(e.value)} 
                                            showTime
                                            hourFormat="24"
                                            inline
                                            className="w-80 h-64 text-xxs p-2 z-50"
                                        />
                                        <button 
                                            onClick={handleConfirm}
                                            className="mt-2 p-2 bg-blue-500 text-white rounded"
                                        >
                                            OK
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="ml-4">
                            <label className="label-class">Existing Conditions or Allergies:</label>
                            <InputText
                                value={formData.p_health}
                                onChange={(e) => setFormData((prev) => ({ ...prev, p_health: e.target.value }))}
                                name="p_health"
                                className="input-class-inp"
                                placeholder="To prepare the doctor for specific medical needs."
                            />
                        </div>

                        <div className="ml-4">
                            <label className="label-class">Doctor:</label>
                            <Dropdown
                                value={formData.d_id}
                                options={doctors.map((doctor) => ({
                                    label: `${doctor.d_name} - ${doctor.d_id}`,
                                    value: doctor.d_id,
                                }))}
                                onChange={(e) => setFormData((prev) => ({ ...prev, d_id: e.value }))}
                                name="d_id"
                                className="input-class-drop"
                                placeholder="Select doctor"
                            />
                        </div>

                        <div className="ml-4">
                            <label className="label-class">Current Medications:(if any)</label>
                            <InputText
                                value={formData.problem_hint}
                                onChange={(e) => setFormData((prev) => ({ ...prev, problem_hint: e.target.value }))}
                                name="problem_hint"
                                className="input-class-inp"
                                placeholder="To avoid conflicts in prescriptions or treatments"
                            />
                        </div>

                        <div className="ml-4">
                            <label className="label-class">Reason for Appointment:</label>
                            <InputText
                                value={formData.problem_hint}
                                onChange={(e) => setFormData((prev) => ({ ...prev, problem_hint: e.target.value }))}
                                name="problem_hint"
                                className="input-class-inp"
                                placeholder="Enter problem hint"
                            />
                        </div>

                        <div className="ml-4">
                            <label className="label-class">Special Requests:</label>
                            <InputText
                                value={formData.problem_hint}
                                onChange={(e) => setFormData((prev) => ({ ...prev, problem_hint: e.target.value }))}
                                name="problem_hint"
                                className="input-class-inp"
                                placeholder="For example, wheelchair access or interpreter services."
                            />
                        </div>

                      
                    </form>
                </div>
                <Button
                            label="Create Appointment"
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 mt-4 mb-3 rounded-md hover:bg-blue-600"
                        />
            </div>
        </div>
    );
};

export default AppointmentForm;
