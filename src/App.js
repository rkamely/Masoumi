import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Wrapper from "./HOC/Wrapper";

import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Wrapper path='/' exact component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
