import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageCharacters from './page/Characters'
import PageCharacterInfo from './page/CharacterInfo'
import router from './store/RouterStore'
import './static/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router history={router.history}>
            <Routes>
                <Route exact path="/characters" element={<PageCharacters />} />
                <Route path="/characters/:id" element={<PageCharacterInfo />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
