import React, { useState } from 'react';

export default function CN() {
  var [count,setNum] = useState(0);
  
  return (
    <div>
      <p>현재 카운드는 {count} 입니다.</p>
      <button onClick={ ()=>{setNum(count+1)} }>더하기</button>
      <button onClick={ ()=>{setNum(count-1)} }>빼기</button>
      <button onClick={ ()=>{setNum(0)} }>초기화</button>
    </div>
  );
}
