import React from "react"

export default function Contact({ img, name, phone, email }) {
    return (
        <div className="contact-card">
            <img src={img} alt="img" />
            <h3>{name}n</h3>
            <div className="info-group">
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <p>{email}</p>
            </div>
        </div>
    )
}

// 2. Build an AirBnb Experiences Clone
// Destructuring props // 구조화

// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name} = person
// console.log(name)

// props 로 내려주고 객체키처럼 받아와도 되지만
// 직관적인 이름을 사용해주자
// JS 처럼 중괄호로 감싸준다.
