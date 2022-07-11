import React from "react"
import logo from './logo.svg';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--logo" />
        </nav>
    )
}

// 2. Build an AirBnb Experiences Clone
// Project Setup: NavBar

// 프로젝트 상단 섹션 만들기 > 정적요소
// 작은 사진 격자와 텍스트
// 메뉴바와 히어로바로 나눌 것이다