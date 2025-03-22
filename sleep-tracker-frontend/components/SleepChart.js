import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SleepChart({ entries }) {
  const calculateDuration = (sleepTime, wakeUpTime) => {
    const sleep = new Date(`1970-01-01T${sleepTime}:00`);
    let wake = new Date(`1970-01-01T${wakeUpTime}:00`);
    if (wake < sleep) wake = new Date(wake.getTime() + 24 * 60 * 60 * 1000); // Next day
    return (wake.getTime() - sleep.getTime()) / (1000 * 60 * 60); // Hours
  };

  const data = {
    labels: entries.map((entry) => entry.date),
    datasets: [
      {
        label: 'Sleep Duration (hours)',
        data: entries.map((entry) => calculateDuration(entry.sleep_time, entry.wake_up_time)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />;
}