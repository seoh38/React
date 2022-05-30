import React from 'react'

// component는 항상 대문자로 시작! 그래야지 component로 인식한다.
const Box = (props) => {
  let result;
  if(
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== " " ) {
  // 카드가 computer카드인가? && 결과가 비긴것인가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else { // 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다.
    result = props.result;
  };

  if(props.title === "Computer") {
    console.log("Computer" , result);
  }

  return (
    // className={box ${result}}이 부분이 핵심이다.
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2 data-testid = "item-name">{props.item && props.item.name}</h2>
        {/* 
          조건부 렌더링!
            리액트의 컴포넌트는 기본적으로 그려주고 싶은 UI를 리턴하고
            만약 UI를 그릴 당시에 보여주고자 하는 값이 없다면 에러를 일으킨다. 
            (Cannot read properties of null!)

            --> 이러한 에러들을 해결하기 위해서 조건부 랜더링을 함!
                내가 원하는 UI를 원하는 조건일 때! 보여주기!
            
          논리 연산자 &&
            자바스크립트에서 true && expression은 항상 expression으로 평가되고 
            false && expression은 항상 false로 평가된다.

            return(
                <div>{data && data.title}</div>
            )
            data에 값이 있을때 (null 이 아닐때)만 .title을 보여준다
        */}
        <img 
          className='item-img' 
          // 논리연산자 사용!(&&)
          src={props.item && props.item.img} />
        <h2>{result}</h2>
        
    </div>
  );
};

export default Box