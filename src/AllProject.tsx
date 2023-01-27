import React from 'react';
import {Footer} from "./footer/Footer";
import {Contacts} from "./contacts/Contacts";
import {DistantWork} from "./distant-work/DistantWork";
import {MyWorks} from "./my-works/MyWorks";
import {Skills} from "./skills/Skills";
import {Main} from "./main/Main";
import {Header} from "./header/Header";
import {Route, Routes} from "react-router";

export const AllProject = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

