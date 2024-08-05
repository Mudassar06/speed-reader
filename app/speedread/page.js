"use client"

import Box from '@/components/Textbox';
import React, { useState, useEffect } from 'react';
import useStore from '@/store/store';

export default function Home() {
    const array = useStore((state) => state.array);
    const [inputValue, setInputValue] = useState(0);
    const [word, setWord] = useState("Start!");
    const [bionify, setBionify] = useState(0);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const run = () => {
        let cumulativeDelay = 0;
        array.forEach((w, index) => {
            let delay = 60000 / inputValue;
            if (w.charAt(w.length - 1) === "." || w.charAt(w.length - 1) === ",") {
                delay += 300;
            }

            setTimeout(() => setWord(w), cumulativeDelay);
            cumulativeDelay += delay;
        });
    };

    const handleBionify = () =>{
        setBionify(!bionify)
    }

    return (
        <div className='bg' >
            <h1>SPEED READ</h1>
            <Box word={word} bnfy={bionify} />
            <input
                id="inputField"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder='Enter wpm'
                style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
            />
            <button onClick={handleBionify}>Bionify</button>
            <button onClick={run}>Start</button>
        </div>
    );
}