import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SleepEntryModal from '../components/SleepEntryModal';

export default function SleepEntries() {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:3000/sleep-entries', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEntries(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          router.push('/login');
        }
      }
    };
    fetchEntries();
  }, [router]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:3000/sleep-entries/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEntries(entries.filter((entry) => entry.id !== id));
    } catch (error) {
      console.error('Delete failed', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sleep Entries</h1>
      <button onClick={() => { setSelectedEntry(null); setShowModal(true); }} style={{ marginBottom: '20px' }}>
        Add New Entry
      </button>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id} style={{ margin: '10px 0' }}>
            {entry.date} - Sleep: {entry.sleep_time} - Wake: {entry.wake_up_time}
            <button onClick={() => { setSelectedEntry(entry); setShowModal(true); }} style={{ marginLeft: '10px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(entry.id)} style={{ marginLeft: '10px', color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {showModal && (
        <SleepEntryModal
          entry={selectedEntry}
          onClose={() => setShowModal(false)}
          onSave={() => {
            setShowModal(false);
            window.location.reload(); // Simplified refresh
          }}
        />
      )}
    </div>
  );
}