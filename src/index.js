import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reducer, { initialState } from './context/Reducer'
import {StateProvider} from './context/StateProvider'

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>,
    document.getElementById('root')
)