"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputBox from '@/components/InputBox';

const Home = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const[arr, setArr] = useState([]);

  const handleSubmit = () => {
    console.log(inputText);
    const newarr = inputText.split(' ');
    setArr(newarr);
    console.log(newarr);
    router.push(`/speedread?arr=${encodeURIComponent(JSON.stringify(newarr))}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h1>ENTER TEXT TO SPEED READ</h1>
      <InputBox inputText={inputText} setInputText={setInputText} />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Home;