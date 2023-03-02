
import React from 'react';
import './index.css';
import {subscribe} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>, document.getElementById('root'))
}
rerenderEntireTree()

subscribe(rerenderEntireTree)