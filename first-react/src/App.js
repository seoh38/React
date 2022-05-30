import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

function App() {
  let counter = 0;
  // useState() 라는 함수를 통해 state를 만든다.
  // 매개변수로서 초기값을 넣어준다.
  // array를 반환을 해준다.
  const [counter2, setCounter2] = useState(0);
  const increase =() => {
    counter = counter + 1; 
    setCounter2(counter2 + 1);
    // counter 값이 계속 1 why?
    // component를 다시 실행시키기 때문에{리랜더링} 변수의 값이 초기화됨
    console.log("counter은 ? ", counter, "counter2 stat는", counter2)
    
  };

  // 1. 유저가 버튼을 클릭한다.
  // 2. counter + 1 이 된다.
  // 3. setState 함수를 호출
  // 4. console.log() 실행
  // 변수값은 1로 보이고 state 값은 아직 안 변했기 때문에 그 전에 값이 보인다.
  // app이 다시 re render
  // let counter = 0 을 거치면서 counter 값이 초기화

  return (
    /*하나로 묶어서 반환을 해줘야 한다 <>...</>*/ 
    /*
      React는 코드가 중복 되는 것을 싫어함
      원하는 코드들을 component로 만들어서 하나의 태그로 만들 수 있다.
      코드 중복을 없애서 아무리 긴 코드라도 간결하게 사용 가능
      React는 관련있는  HTML과 Js를 함께 둔다
    */ 

   /* 
      state가 바뀌면 ui가 다시 랜더링된다.
      비동기적으로 동작! -> 함수가 모두 끝나야지 실행이 된다.
   */
    <div>

      <div>{counter}</div>
      <div>state:{counter2}</div>
      {/* 대괄호{}를 사용! String은 "" */}
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
