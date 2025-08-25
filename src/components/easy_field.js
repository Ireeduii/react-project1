import React, { useState } from 'react';
const [text, setText] = useState("")
function InputField() {
function handleChange(e) {
    setText(e.target.value)
}
<input type='text' value={text} onChange={handleChange}/>
<p><input text= {text}></p>
  return (
    <div>
      <input type="text" />
      <p>Input text: TODO</p>
    </div>
  );
}

export default InputField;