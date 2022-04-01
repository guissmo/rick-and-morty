/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import MainPage from './MainPage'
// import CharacterCardGrid from './CharacterCardGrid'
import CharacterInfoPage from './CharacterInfoPage'

const App = inject('routing')(
    observer(
        class App extends React.Component {
            UNSAFE_componentWillMount() {
                this.unlisten = this.props.history.listen(
                    (location, action) => {
                        console.log('on route change')
                    }
                )
            }

            componentWillUnmount() {
                this.unlisten()
            }

            render() {
                const { location, push, goBack } = this.props.routing
                return (
                    <Routes>
                        <Route exact path="/" element={<MainPage />} />
                        <Route
                            path="/characters"
                            element={<CharacterInfoPage />}
                        />
                    </Routes>
                )
            }
        }
    )
)
export default App
