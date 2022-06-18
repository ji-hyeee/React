//// 6. Bulid a React info site
// Why React ? It's Composable !

// custom components
// maintainable & flexible / 관리하기 쉽고 유연하게 관리할 수 있다
{
  /* <body>
    <MyAwesomeNavbar />
    <MainContent />
    <MyAwesomeFooter />
</body> */
}

// Challenge : Create your own custom React Component !
// Call it "MainContent", and have it return a simple
// h1 element hat says "I'm learning React !"

// Afterward, render it below the Navbar
// (Which you can do inside the ReactDOM.render call below)

// function MainContent() {
//   return <h1>I'm learning React !</h1>;
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

//// 7. Bulid a React info site
// Why React ? It's Declarative! / 선언적

// Declarative // 선언적
// What should be done? / 무엇을 할까요? 시키는대로 합죠
// Just tell me what to do, and i'll worry about how i get it done

// Imperative // 피할 수 없는
// How should it bo done? // 어떻게 하나요? 하나하나 알려주세요
// Describe to me every step on how to do something, and i'll do it

// Challenge
// recreate the above line of code in vanilla JS by creating and
// appending an h1 to our div#root (without using innerHTML)

// Create a new h1 element
// Give it some textContent
// Git it a class name of "header"
// append it as a child of the div#root

// 내가 쓴 코드
// const h1 = document.createElement(h1); // "" 따옴표 사용하기 !!!!! undefined 로 나왔음
// h1.innerText = "help"; // textContent 사용
// h1.className = "header";
// const div = document.getElementById("root");
// div.appendChild(h1);

// 정답
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);

// h1 하나 추가하는데도 4줄인데 만약에 페이지를 만든다면 ? 무지성 빌드 가야한다
// 리액트는 한 줄로 맹글어버릴 수 있다구요. 쉽다구요 !
// ReactDOM.render(
//   <h1 className="header">Hello!</h1>,
//   document.getElementById("root")
// );

//// 8. Build a React info site
// JSX

// ReactDOM.render(<h1>This is JSX</h1>, document.getElementById("root"));

// JSX is as sort of a flavor of JS
// looks a lot like html
// 몇가지 다른 점을 제외하고는 html 과 상당히 유사하다

// const h1 = document.createElement("h1");
// h1.textContent = "Hello world";
// h1.className = "header";
// console.log(h1);
// // <h1 class="header">Hello world</h1> / element

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);
// // {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …} / object

// // JSX
// ReactDOM.render(element, document.getElementById("root"));

// JSX 는 객체를 반환합니다
// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof: Symbol(react.element)
// key: null
// props: {className: 'header', children: 'This is JSX'}
// ref: null
// type: "h1"
// _owner: null
// _store: {validated: false}
// _self: null
// _source: null
// [[Prototype]]: Object

// 페이지에 두 개의 요소를 넣을 수 없읍니다
// 하나의 요소로 매핑해주어야 한다 ! (div 같은 걸로)
// ReactDOM.render(
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>,
//   document.getElementById("root")
// );

// 요소들을 변수로 저장 하는 방법도 있다
const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
);

// ReactDOM.render(page, document.getElementById("root"));

// Challenge
// Create a navbar in JSX
// Use the semantic 'nav' element as the parent wrapper
// Have an h1 element with the brand name of you "website"
// Insert an unordered list for the other nav elements
//// Inside the 'ul', have three 'li's for
//// "Pricing", "About", "Contact"
// Don't worry about styling yet
// it'll just be plain-looking HTML for now

const mysite = (
  <div>
    <nav>
      <h1>hye's site</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
);
ReactDOM.render(mysite, document.getElementById("root"));
