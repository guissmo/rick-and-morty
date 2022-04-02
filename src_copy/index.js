import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import CharacterInfoPage from './CharacterInfoPage'
import router from './RouterStore'
import './css/style.css'

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider {...stores}> */}
        <Router history={router.history}>
            <Routes>
                <Route exact path="/characters" element={<MainPage />} />
                <Route path="/characters/:id" element={<CharacterInfoPage />} />
            </Routes>
        </Router>
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById('root')
)
