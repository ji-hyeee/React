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
      <Card />
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