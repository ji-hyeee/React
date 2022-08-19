import React from "react"
import Nav from "./Nav";
import Card from './Card';
import data from './data'

export default function Main() {
    const travelData = data.map(el => {
        // console.log(el)
        return (
            <Card
                key={el.id}
                {...el}
            />
        )
    })

    return (
        <div className="main_container">
            <Nav />
            {travelData}
        </div>
    )
}