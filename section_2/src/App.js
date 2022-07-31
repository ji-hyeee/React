import './App.css';
import Navbar from "./compoenets/NavBar"
import Hero from "./compoenets/Hero"
import Card from "./compoenets/Card"
import Contact from "./compoenets/Contact"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="https://pbs.twimg.com/media/FYMzp5LVEAAqFVu?format=jpg&name=large"
        rating="5.0"
        reviewCount={6}
        country="Seoul"
        title="The Man Who Laughs"
        price="150,000"
      />

      {/* props practice */}
      <div className="contacts">
        <Contact
          img="https://pbs.twimg.com/media/FYVZMQSaMAE4cDO?format=jpg&name=large"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="https://pbs.twimg.com/media/FWE7bHcaQAcSEZF?format=jpg&name=large"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img="https://pbs.twimg.com/media/FYQwLBxaMAA2bGU?format=jpg&name=large"
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img="https://pbs.twimg.com/media/FXS8wjmakAAtJ54?format=jpg&name=large"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
    </div>
  )
}


// 2. Build an AirBnb Experiences Clone
// React renders array

// react can render an array of jsx elements and put those concepts together 
// which will allow us to instead of hard coding our data directly into our components 
// like we're doing here instead


// react는 jsx 요소의 배열을 렌더링하고 이러한 개념을 함께 결합하여 여기에서 하는 것처럼 
// 데이터를 컴포넌트에 직접 하드 코딩하는 대신 할 수 있습니다.

// export default function App() {
//   const colors = [
//           <h3>Red</h3>, 
//           <h3>Orange</h3>, 
//           <h3>Yellow</h3>,
//           <h3>Green</h3>,
//           <h3>Blue</h3>,
//           <h3>Indigo</h3>,
//           <h3>Violet</h3>
//       ]
//   return (
//       <div>
//           {colors}
//       </div>
//   )
// }