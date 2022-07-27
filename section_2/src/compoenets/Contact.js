import React from "react"

export default function Contact({ img, name, phone, email }) {
    return (
        <div className="contact-card">
            <img src={img} alt="img" />
            <h3>{name}</h3>
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
// Passing in non-string Props

//  how might you pass in a prop that wasn't a string data type?
//  문자열 데이터 유형이 아닌 prop을 어떻게 전달할 수 있습니까?

// 중괄호!!!

{/* <Joke 
    punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
    isPun={true}
    upvotes={10}
    downvotes={2}
    comments={[{author: "", body: "", title: ""}, {...}]}
/> */}