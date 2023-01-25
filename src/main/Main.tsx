import React from 'react';
import s from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import mainImage from "../assets/images/main.jpg";

export const Main = () => {
    const mainBackground = {
        backgroundImage: `url(${mainImage})`
    }
    return (
        <div className={s.mainBlock} style={mainBackground}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <h1 className={s.orangeText}>HI,</h1>
                    <h1>I`am<span className={s.orangeText}> Kirill</span></h1>
                    <span>Front End </span>
                    <span className={s.orangeText}>Developer</span>
                    <div>
                        <span>React Redux </span>
                        <span className={s.orangeText}>Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

