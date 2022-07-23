import React from "react"

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt="img" />
            <h3>{props.name}n</h3>
            <div className="info-group">
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// 2. Build an AirBnb Experiences Clone
// Prop Quiz (Get it?)

// 1. What do props help us accomplish?
// 1. 소품은 우리가 성취하는 데 어떤 도움이 됩니까?

// 하드코딩을 줄여준다
// 컴포넌트 재활용

// Make a component more reusable.
// 컴포넌트를 더 재사용 가능하게 만드십시오.


// 2. How do you pass a prop into a component?
// 2. prop을 컴포넌트에 어떻게 전달합니까?

// 컴포넌트 함수에 파라미터로 전달한다
// prop 이 객체이기에 키값을 붙여주면 사용할 수 있다

// <MyAwesomeHeader title="???" /> 


// 3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
//    DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
// 3. 커스텀 소품(예: `blahblahblah={true}`)을 네이티브에 전달할 수 있나요?
//    DOM 요소? (예: <div blahblahblah={true}>) 왜 또는 왜 안되나요?
   
//    I dont know
// No, because the JSX we use to describe native DOM elements will
// be turned into REAL DOM elements by React. And real DOM elements
// only have the properties/attributes specified in the HTML specification.
// (Which doesn't include properties like `blahblahblah`)

// 아니요, 네이티브 DOM 요소를 설명하는 데 사용하는 JSX는
// React에 의해 REAL DOM 요소로 변환됩니다. 그리고 실제 DOM 요소
// HTML 사양에 지정된 속성/속성만 있습니다.
// ('blahblahblah'와 같은 속성은 포함하지 않음)


// 4. How do I receive props in a component?
// 4. 컴포넌트에서 props는 어떻게 받나요?
// function Navbar(props) {
//     return (
//         <header>
//             ...
//         </header>
//     )
// }


// 5. What data type is `props` when the component receives it?
// 5. 컴포넌트가 수신할 때 `props`의 데이터 유형은 무엇입니까?

// Object