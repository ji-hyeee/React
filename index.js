// 18. Build a React info site
// Organize Compoenets

import React from "react"
import ReactDOM from "react-dom"
// 메인에 컴포넌트를 가져와서 연결시켜주기
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))