// // 12. pop quiz
// 1. Why do we need to `import React from "react"` in our files?
// 렌더링
// 리액트 사용을 위해서
// 기존에 index.html <head> 에서 링크를 걸어줬다면
// react 를 별도로 불러왔기 때문에 import 로 연결이 필요하다
// 정답 : React is what defines JSX


// 2. If I were to console.log(page) in index.js, what would show up?
// object...?
// 정답 : A Javascript object
// React elements that describe what React should eventually add to the real DOM for us.
// React가 궁극적으로 우리를 위해 실제 DOM에 추가해야 하는 것을 설명하는 React 요소입니다.


// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// 최상위 element 로 묶어주지 않았다
// 정답 : We need out JSX to be nested under a single parent element
// 우리는 JSX가 단일 부모 요소 아래에 중첩되어야 합니다.


// 4. What does it mean for something to be "declarative" instead of "imperative"?
// 무언가가 "필수적"이 아니라 "선언적"이라는 것은 무엇을 의미합니까?
// 하나하나 코드를 작성해서 이 작업을 실행해줘 가 아닌
// 하나의 작업을 알려주면 알아서 작업을 순서대로 진행한다는 의미
// 정답 : 
// 선언적 : 컴퓨터에게(프로그램에) 무엇을 말할 수 있는가 // 샌드위치 만들어
// 필수적 : 단계별로 알려주는 것 // 빵을 손으로 집어 > 피넛버터를 가져와 . . .
// Declarative means I can tell the computer WHAT to do 
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.
// 선언적이란 컴퓨터에게 무엇을 하라고 지시할 수 있음을 의미합니다.
// 세부 사항을 처리할 것으로 기대합니다. 명령형은 내가 필요로 하는 것을 의미합니다
// 각 단계를 수행하는 방법을 알려줍니다.


// 5. What does it mean for something to be "composable"?
// "구성 가능"하다는 것은 무엇을 의미합니까?

// html 요소를 react 에서 직접 구성할 수 있다
// 정답 : We have small pieces that we can put together to make something
// larger/greater than the individual pieces.
// 우리에게는 무언가를 만들기 위해 모일 수 있는 작은 조각들이 있습니다. 개별 조각보다 크거나 큽니다.

// 웹 측면에서 더 큰 전체 개발은 내가 조각을 취할 수 있음을 의미
// UI 사용자 인터페이스의 자체 구성 요소를 만들 수 있다