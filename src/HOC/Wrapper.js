import React from "react";
import {Route} from "react-router-dom";

import Header from "../Containers/Header"
import Footer from "../Containers/Footer"

import './Wrapper.scss';

export default function Wrapper({component: Component, ...rest}) {

    return (
        <Route {...rest} render={matchProps => (
            <main className='ٌWrapper'>
                <Header/>
                <Component {...matchProps}/>
                <Footer/>
            </main>
        )}/>
    )
}