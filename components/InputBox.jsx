import React from 'react';

const InputBox = ({ inputText, setInputText }) => {

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>        
      <textarea
        className="inputbox"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text"
      />
      {/* {inputText} */}
    </div>
  );
};

export default InputBox;