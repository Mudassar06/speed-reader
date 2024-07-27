"use client"

import Box from '../components/Textbox';
import React, { useState } from 'react';

const words = [
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
  "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
  "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yellowfruit",
  "zucchini", "apricot", "blackberry", "blueberry", "cantaloupe", "dragonfruit",
  "eggplant", "gooseberry", "jackfruit", "kumquat", "lime", "lychee", "mandarin",
  "mulberry", "olive", "peach", "pear", "persimmon", "pineapple", "plum", "pomegranate",
  "pumpkin", "starfruit", "tomato", "yam", "zebrafruit"
];

export default function Home() {

  const [inputValue, setInputValue] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [word, setWord] = useState("Start!");

  const run = () => {
    words.forEach((w, index) => {
      setTimeout(() => setWord(w), index * 60000/inputValue);
    });
  };

  return (
    <div className='bg' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <Box word={word} />
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder='Enter wpm'
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      />

      <button onClick={run}>Start</button>
    </div>
  );
}