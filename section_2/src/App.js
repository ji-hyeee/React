import './App.css';
import Navbar from "./compoenets/NavBar"
import Hero from "./compoenets/Hero"
import Card from "./compoenets/Card"
import Contact from "./compoenets/Contact"
import cardlist from './compoenets/Cardlist';

export default function App() {

  const cardele = cardlist.map(card => {
    return <Card setup={card.setup} punchline={card.punchline} />
  })

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

      {/* map practice */}
      <div>{cardele}</div>

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
// Map Quiz

// 1. What does the `.map()` array method do?
// `.map()` 배열 메서드는 무엇을 합니까?
// 배열을 순회하면서 특정 코드를 적용한 값을 반환한다


// 2. What do we usually use `.map()` for in React?
// React에서 일반적으로 `.map()`을 사용하는 것은 무엇입니까?
// 반복되는 요소 렌더링 시 사용


// 3. Why is using `.map()` better than just creating the components
//    manually by typing them out?
//    구성 요소를 만드는 것보다 `.map()`을 사용하는 것이 더 나은 이유
//    수동으로 입력하여?
// 재활용 가능


//// 정답
// 1
// Returns a new array. Whatever gets returned from the callback
// function provided is placed at the same index in the new array.
// Usually we take the items from the original array and modify them
// in some way.
// 새 배열을 반환합니다.
// 제공된 콜백 함수에서 반환되는 모든 항목은 새 배열의 동일한 인덱스에 배치됩니다.
// 일반적으로 원래 배열에서 항목을 가져와서 어떤 식으로든 수정합니다.


// 2
// Convert an array of raw data into an array of JSX elements that can be displayed on the page.
// 원시 데이터 배열을 페이지에 표시할 수 있는 JSX 요소 배열로 변환합니다.


// 3
// It makes our code more "self sustaining" - not requiring additional changes whenever the data changes.
// 데이터가 변경될 때마다 추가 변경이 필요하지 않아 코드가 더 "자체 유지"됩니다.