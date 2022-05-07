import React, {lazy, Suspense, useState} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import SwitchContext from './Context/ThemeSwitch'
import './App.scss';
import toBoolean from "validator/es/lib/toBoolean";

function App() {

    const Home = lazy(() => import("./Pages/Home"));
    const Wrapper = lazy(() => import("./HOC/Wrapper"));

    const [lightTheme, setLightTheme] = useState(toBoolean(localStorage.getItem('theme')))

    const themeSwitchHandler = () => {
        localStorage.setItem('theme', `${!lightTheme}`)
        setLightTheme(!lightTheme)
    }



    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <SwitchContext.Provider value={{
                            lightTheme,
                            themeSwitchHandler,
                        }}>
                            <Wrapper path='/' exact component={Home}/>
                        </SwitchContext.Provider>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
