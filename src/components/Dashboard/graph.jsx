import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PatientStatusGraph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const fetchPatientStatusData = async () => {
            const token = localStorage.getItem("authToken"); // Retrieve token from localStorage

            if (!token) {
                console.error("No auth token found in localStorage");
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/patient-status', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                const monthLabels = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Calculate active, inactive, and total counts for each month
                const activeCounts = monthLabels.map(month =>
                    data.filter(record => record.month === month && record.p_status === 'Active').length
                );

                const inactiveCounts = monthLabels.map(month =>
                    data.filter(record => record.month === month && record.p_status === 'Inactive').length
                );

                const totalCounts = monthLabels.map((_, index) => activeCounts[index] + inactiveCounts[index]);

                setChartData({
                    labels: monthLabels,
                    datasets: [
                        {
                            label: 'Active Patients',
                            backgroundColor: '#4CAF50',
                            data: activeCounts,
                        },
                        {
                            label: 'Inactive Patients',
                            backgroundColor: '#FF5722',
                            data: inactiveCounts,
                        },
                        {
                            label: 'Total Patients',
                            backgroundColor: '#42A5F5',
                            data: totalCounts,
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching patient status data:", error);
            }
        };

        fetchPatientStatusData();

        // Chart options setup
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        setChartOptions({
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                    },
                    title: {
                        display: true,
                        text: 'Number of Patients',
                        color: textColorSecondary,
                    },
                },
            },
        });
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} className="h-88 mt-9" />
        </div>
    );
}
