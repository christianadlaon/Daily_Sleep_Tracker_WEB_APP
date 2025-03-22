import { useState } from 'react';
import axios from 'axios';

export default function SleepEntryModal({ entry, onClose, onSave }) {
  const [date, setDate] = useState(entry?.date || '');
  const [sleepTime, setSleepTime] = useState(entry?.sleep_time || '');
  const [wakeUpTime, setWakeUpTime] = useState(entry?.wake_up_time || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !sleepTime || !wakeUpTime) {
      alert('All fields are required');
      return;
    }
    const token = localStorage.getItem('token');
    const url = entry ? `/sleep-entries/${entry.id}` : '/sleep-entries';
    const method = entry ? 'put' : 'post';

    try {
      await axios({
        method,
        url: `http://localhost:3000${url}`,
        data: { date, sleep_time: sleepTime, wake_up_time: wakeUpTime },
        headers: { Authorization: `Bearer ${token}` },
      });
      onSave();
    } catch (error) {
      console.error('Failed to save entry', error);
    }
  };

  return (
    <div style={{ position: 'fixed', top: '20%', left: '20%', background: 'white', padding: '20px', border: '1px solid #ccc' }}>
      <h2>{entry ? 'Edit' : 'Add'} Sleep Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <input
          type="time"
          value={sleepTime}
          onChange={(e) => setSleepTime(e.target.value)}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <input
          type="time"
          value={wakeUpTime}
          onChange={(e) => setWakeUpTime(e.target.value)}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <button type="submit" style={{ marginRight: '10px' }}>Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}