import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import MainPage from './MainPage'
import CharacterInfoPage from './CharacterInfoPage'

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route path="/" element={<CharacterInfoPage />} />
                {/* <Route path="/" element={<MainPage />} /> */}
            </Routes>
        </Router>
    )
}

export default App
