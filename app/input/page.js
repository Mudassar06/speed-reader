"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputBox from '@/components/InputBox';
import useStore from '@/store/store';

const Home = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const [arr, setArr] = useState([]);
  const array = useStore((state) => state.array);

  const handleSubmit = () => {
    const newarr = inputText.split(' ');
    setArray(newarr);
    router.push('/speedread');

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