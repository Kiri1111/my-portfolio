import React from 'react';
import s from './Main.module.css'
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
                    
                    <h1 className={s.f}>HI,</h1>
                    <h1 className={s.d}>I`am<span className={s.f}> Kirill</span></h1>
                    <span className={s.d}>Front End </span>
                    <span className={s.f}>Developer</span>
                    <div>
                        <span className={s.d}>React Redux </span>
                        <span className={s.f}>Developer</span>
                    </div>
                </div>
                {/*<div className={s.photo}>*/}
                {/*    Photo*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

