//// First React
// Spend a minute memorizing the line below
// Re-write the line of code as beat you can from memory

// ReactDOM.render 를 통해서 내가 무엇을 렌더링 하고 싶은지
// document.getElementById 를 통해 어디에 렌더링 하고 싶은지

// ReactDOM.render(<h2>암기 암기</h2>, document.getElementById("root"));

// 당연히 가능한 것들
// document.getElementById("root");
// document.querySelector("#root");



//// First React Practice
// Try to write that 1-liner of React code again!
// This time, see if you can figure out how to render an <ul> with 2+ <li>s inside

ReactDOM.render(
    <div>
        <h2>leran React</h2>
        <ul>
            <li>apple</li>
            <li>banana</li>
        </ul>
    </div>, 
    document.getElementById("root"));
