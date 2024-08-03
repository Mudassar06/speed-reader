"use client"

import Box from '@/components/Textbox';
import React, { useState, useEffect } from 'react';
import useStore from '@/store/store';

export default function Home() {
    const array = useStore((state) => state.array);
    const [inputValue, setInputValue] = useState(0);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const [word, setWord] = useState("Start!");

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


    return (
        <div className='bg' >
            <h1>SPEED READ</h1>
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






// Sample text:
// The first thing we have to do with heroism is to lay bare its underside, show what gives human heroics its specific nature and impetus. Here we introduce directly one of the great rediscoveries of modern thought: that of all things that move man, one of the principal ones is his terror of death. After Darwin the problem of death as an evolutionary one came to the fore, and many thinkers immediately saw that it was a major psychological problem for man. 2 They also very quickly saw what real heroism was about, as Shaler wrote just at the turn of the century heroism is first and foremost a reflex of the terror of death. We admire most the courage to face death; we give such valor our highest and most constant adoration; it moves us deeply in
// our hearts because we have doubts about how brave we ourselves would be. When we see a man bravely facing his own extinction we rehearse the greatest victory we can imagine. And so the hero has been the center of
// human honor and acclaim since probably the beginning of specifically human evolution. But even before that our primate ancestors deferred to others who were extrapowerful and courageous and ignored those who were
// cowardly. Man has elevated animal courage into a cult.