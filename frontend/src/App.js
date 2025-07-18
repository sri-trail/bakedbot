import React, { useState } from 'react';
import './App.css';

function App() {
  const [goal, setGoal] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setResults(null);
    if (!goal) {
      setError('Please enter a goal');
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:3001/recommendations?goal=${encodeURIComponent(goal)}`
      );
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      setResults(data);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="App" style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>Product Recommender</h1>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <input
          style={{ flexGrow: 1, padding: 8 }}
          type="text"
          placeholder="Enter goal, e.g. relaxation or sleep or weight"
          value={goal}
          onChange={e => setGoal(e.target.value)}
        />
        <button style={{ padding: 8 }} onClick={handleSearch}>
          Search
        </button>
      </div>

      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {results && (
        <>
          <h2>
            Results for “{results.goal}” ({results.count})
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {results.recommendations.map(item => (
              <li
                key={item.id}
                style={{
                  border: '1px solid #ccc',
                  padding: 12,
                  marginBottom: 12,
                  borderRadius: 4,
                }}
              >
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <p>{item.augmented_description}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
