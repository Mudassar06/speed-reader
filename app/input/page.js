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
  const setArray = useStore((state) => state.setArray);

  const handleSubmit = () => {
    const newarr = inputText.split(' ');
    setArray(newarr);
    router.push('/speedread');

  };

  return (
    <div className='bg'>
      <h1>ENTER TEXT TO SPEED READ</h1>
      <InputBox inputText={inputText} setInputText={setInputText} />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Home;