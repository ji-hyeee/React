import './App.css';
import Navbar from "./compoenets/NavBar"
import Hero from "./compoenets/Hero"
import Card from "./compoenets/Card"
import Contact from "./compoenets/Contact"
import data from './data';
import data2 from './data2';

export default function App() {

  const dataList = data.map(datas => {
    return (
      <Card
        // 2. Build an AirBnb Experiences Clone
        // Project: Sold Out Badge
        key={datas.id}
        img={datas.coverImg}
        rating={datas.stats.rating}
        reviewCount={datas.stats.reviewCount}
        location={datas.location}
        title={datas.title}
        price={datas.price}
        openSpots={datas.openSpots}
      />
    )
  })

  const data2List = data2.map(datas => {
    return (
      <Contact
        key={datas.id}
        img={datas.img}
        name={datas.name}
        phone={datas.phone}
        email={datas.e}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {dataList}
      </section>
      <div className="contacts">
        {data2List}
      </div>
    </div>
  )
}