import React, { useState } from 'react';
import config from './config';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(config.POLLS_API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <header>Hello World</header>
      <button onClick={fetchData}>Fetch Data</button>
      hello? {data === null ? <p>data is null</p> : <p>there is data</p>}
      {data && (
        <div>
          <h2>Fetched Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
