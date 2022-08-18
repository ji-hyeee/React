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
        key={datas.id}
        // 2. Build an AirBnb Experiences Clone
        // Project: Spread object as props
        {...datas}
      />
    )
  })

  const data2List = data2.map(datas2 => {
    return (
      <Contact
        key={datas2.id}
        datas2={datas2}
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