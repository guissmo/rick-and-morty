import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createBrowserHistory } from 'history'
// import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import CharacterInfoPage from './CharacterInfoPage'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

// const stores = {
//     routing: routingStore,
// }

const history = syncHistoryWithStore(browserHistory, routingStore)

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider {...stores}> */}
        <Router history={history}>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/characters/:id" element={<CharacterInfoPage />} />
            </Routes>
        </Router>
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById('root')
)
