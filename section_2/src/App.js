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
// Mapping Components


// Challenge: See if you can correctly pass the necessary props to the 
// Joke component in the .map() (and render the jokeElements array) so 
// the jokes show up on the page again

// 과제: 필요한 소품을 올바르게 전달할 수 있는지 확인하십시오.
// .map()의 농담 구성 요소(그리고 jokeElements 배열을 렌더링)
// 농담이 페이지에 다시 나타납니다.