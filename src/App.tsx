import React from 'react';
import './App.module.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./my-works/MyWorks";
import {DistantWork} from "./distant-work/DistantWork";
import {Сontacts} from "./contacts/Сontacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistantWork/>
            <Сontacts/>
            <Footer/>
        </div>
    );
}

export default App;
