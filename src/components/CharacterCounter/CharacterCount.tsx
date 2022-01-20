import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from './state';

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return (
    <div>
      <span>Character Count: {count}</span>
    </div>
  );
}

export default CharacterCount;
