import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './redux/index'
import Info from './components/Info'
import UserAgent from "./components/UserAgent";

const store = createStore(reducer, applyMiddleware(thunk, logger))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Info /><br/>
                    <UserAgent />
                </div>
            </Provider>
        )
    }
}

export default App
