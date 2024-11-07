import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PatientRecoveryGraph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        // Example data for Patients Admitted and Patients Cured over months
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Patients Admitted',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [60, 55, 65, 80, 95, 110, 120], // Sample data for patients admitted
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Patients Cured',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [45, 30, 50, 70, 80, 90, 100], // Sample data for patients cured
                    borderColor: 'white',
                    borderWidth: 2
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    },
                    title: {
                        display: true,
                        text: 'Number of Patients',
                        color: textColorSecondary
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    
    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} className="h-88 mt-9" />
        </div>
    );
}
