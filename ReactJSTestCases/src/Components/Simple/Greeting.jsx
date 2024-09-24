// src/components/Greeting.js
import React, { useState } from 'react';

function Greeting({ initialName }) {
  const [name, setName] = useState(initialName);

  return (
    <div>
      <p>Hello, {name}!</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a new name"
      />
    </div>
  );
}

export default Greeting;
