import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import PageCharacters from './page/Characters'
import PageCharacterInfo from './page/CharacterInfo'
import PageNotFound from './page/404'
import router from './store/RouterStore'
import './static/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router history={router.history}>
            <Routes>
                <Route exact path={`${process.env.PUBLIC_URL}/characters`} element={<PageCharacters />} />
                <Route path={`${process.env.PUBLIC_URL}/characters/:id`} element={<PageCharacterInfo />} />
                <Route
                    exact
                    path={`/${process.env.PUBLIC_URL}/`}
                    element={<Navigate replace to={`${process.env.PUBLIC_URL}/characters`} />}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
