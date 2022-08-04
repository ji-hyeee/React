import './App.css';
import Navbar from "./compoenets/NavBar"
import Hero from "./compoenets/Hero"
import Card from "./compoenets/Card"
import Contact from "./compoenets/Contact"
import data from './data';

export default function App() {

  const dataList = data.map(datas => {
    return (
      <Card
        img={datas.coverImg}
        rating={datas.stats.rating}
        reviewCount={datas.stats.reviewCount}
        location={datas.location}
        title={datas.title}
        price={datas.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      {dataList}

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
// Project: Map