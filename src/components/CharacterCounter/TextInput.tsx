import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './state';

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;
