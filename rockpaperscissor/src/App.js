import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. box 2개(타이틀, 사진정보, 결과값)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다. (;;;;;개어려움)
// 5. 3, 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다.(이기면 초록, 지면 빨강, 비기면 검은색)

// 컴포넌트는 하나의 덩어리를 리턴해야 한다!
// <div> 태그로 하나의 덩어리로 감싸주기!

const choice = {
  rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors:{
    name:"Sciccors",
    img:"https://us.123rf.com/450wm/yupiramos/yupiramos1901/yupiramos190101350/126464201-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98%EC%97%90-%EA%B0%80%EC%9C%84-%EA%B3%B5%EA%B8%89.jpg?ver=6"
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaDPs1pJuhP3LzTHctkzNUPZmJ-Cglx5vaw&usqp=CAU"
  },
};

function App() {
  // state 만들어 주기!
  // state가 변경되면 UI가 변경된다.
  const [userSelect, setUserSelect] =  useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  // onclick 했을때 실행되는 함수!
  // play 함수에서 매개변수 받아서 프린트!
  const play = (userChoice) => {
    console.log("선택됨", userChoice);

    // userSelect의 값을 변경해준다!
    setUserSelect(choice[userChoice]);

    // 컴퓨터가 선택한 값
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(jugement(choice[userChoice], computerChoice));
  };

  const jugement = (user, computer) => {
    console.log("user : ", user, "computer : ", computer);

    // 가위바위보 로직은 어떨까?
    // user == computer -> tie
    // user == "rock", computer == "scissors" -> user 이김
    // user == "rock", computer == "paper" -> user 졌음
    // user == "scissors", computer == "paper" -> user 이김
    // user == "scissors", computer == "rock" -> user 졌음
    // user == "paper", computer == "rock" -> user 이김
    // user == "paper", computer == "scissors" -> user 졌음
    
    
    // if(user.name == computer.name) {
    //   return "tie"
    // } else if(user.name == "Rock") {
    //   if(computer == "Scissors") {
    //     return "win"
    //   } else {
    //     return "lose"
    //   }
    // }

    // 위의 if 문을 삼항연산식으로 바꾸기!
    if(user.name == computer.name) {
      return "tie";
    } else if(user.name == "Rock") 
      return computer.name == "Scissors" ? "win" : "lose";
    else if(user.name == "Scissors") 
      return computer.name == "Paper" ? "win" : "lose";
    else if(user.name == "Paper") 
      return computer.name == "Rock" ? "win" : "lose";
  };

  // math.random() -> 숫자를 가져옴!
  // 배열로 아이템과 숫자를 연결해 준다. (인덱스 값을 랜덤하게 가져온다.)
  // Object.keys(choice) ? 
  // -> 객체에 키값만 뽑아서 array로 만들어주는 함수!!
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("randon Array : ", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    
    let final = itemArray[randomItem];
    console.log("final", final);

    return choice[final];
  };

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>

      <div className='main'>
        {/* 
          onClick안에서 HTML에서 전달해준 것 처럼 paly()
          이렇게 전달을 하면 이는 함수를 실행하는 문장이기 때문에 
          이벤트가 발생하지 않았음에도 불구하고 처음에 render 시 바로 호출 되버린다. 
          따라서 함수를 콜백형태로 전달해주는 것이 중요하다.

          전달해줄 매개변수가 있는 경우!!!
         */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
