import React from 'react';
import s from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import mainImage from "../assets/images/main.jpg";
import {ParticleComponent} from "../particle/Particle";
import Fade from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import gitHubI from "../assets/icons/github.png";
import linkedinI from "../assets/icons/linkedin.png";
import telegramI from "../assets/icons/telegram.png";

export const Main = () => {
    const mainBackground = {
        backgroundImage: `url(${mainImage})`
    }
    const gitHubIcon = gitHubI
    const linkedinIcon = linkedinI
    const telegramIcon = telegramI
    return (
        <div id={'Main'} className={s.mainBlock} style={mainBackground}>
            <ParticleComponent/>
            <div className={s.divTel}>
                <div>
                    <a href={'https://github.com/Kiri1111'}>
                        <img alt={'icon'} className={s.icon} src={gitHubIcon}/>
                    </a>
                </div>
                <div>
                    <a href={'https://t.me/MedvedevKirill92'}>
                        <img alt={'icon'} className={s.icon} src={telegramIcon}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.linkedin.com/in/kirill-medvedev-a75893253/'}>
                        <img alt={'icon'} className={s.icon} src={linkedinIcon}/>
                    </a>
                </div>
            </div>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <Fade>
                        <h1 className={s.orangeText}>HI,</h1>
                        <h1>I`am<span className={s.orangeText}> Kirill</span></h1>
                        <div>
                            <span>Front End </span>
                            <span className={s.orangeText}>Developer</span>
                        </div>
                        <div>
                            <ReactTypingEffect text={'React Redux Developer'}/>
                        </div>
                    </Fade>
                </div>
            </div>

        </div>
    );
};

