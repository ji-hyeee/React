import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src="https://pbs.twimg.com/media/FXa_7NDVEAAyIfR?format=jpg&name=large" alt="card1" className="card--image" />
            <div className="card--stats">
                <img src="https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon3/mt-star.svg" alt="star" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Park Kang Hyun</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

// 2. Build an AirBnb Experiences Clone
// Project Card Component

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
/*
과제: 카드 구성 요소 구축
지금은 데이터에 하드 코딩(예:
등급, 제목, 가격 등)

메모:
- 1개의 인스턴스만 렌더링합니다(이미 이 작업을 수행했습니다).
- 별 아이콘과 사진(katie-zaferes.png)은 이미지에 있습니다.
  사용할 폴더
- 다음을 포함해야 합니다.
    - 이미지
    - 별 아이콘(star.png), 평점, 리뷰 개수
    - 제목
    - 비용/인
- 이 챌린지의 주요 목적은 우리의 한계가 어디인지 보여주는 것입니다.
  현재 모든 것을 하드 코딩하고 있다는 사실에 대해 걱정하지 마십시오.
  이 데이터를 구성 요소에 넣습니다.
*/