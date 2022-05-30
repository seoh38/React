import React from 'react'

/* rafce 를 입력해주면 컴포넌트가 자동으로 생성!*/
/* Box 라는 함수를 만들어서 수출!*/
const Box = (props) => {
    console.log("props: ", props)
  return (
    <div className='box'>
        Box{props.num}
        <p>{props.name}</p>
      </div>
  )
}

export default Box