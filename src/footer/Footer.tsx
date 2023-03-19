import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import footerImg from "../assets/images/footer.png";
import phone from '../assets/icons/phone.png'
import address from '../assets/icons/address.png'
import gitHubI from '../assets/icons/github.png'
import linkedinI from '../assets/icons/linkedin.png'
import telegramI from '../assets/icons/telegram.png'
import Fade from "react-awesome-reveal";

export const Footer = () => {
    const footer = {
        backgroundImage: `url(${footerImg})`
    }
    const telIcon = phone
    const addressIcon = address
    const gitHubIcon = gitHubI
    const linkedinIcon = linkedinI
    const telegramIcon = telegramI
    return (
        <div className={s.footerBlock} style={footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.contant}>
                    <Fade>

                        <h2>Kirill Medvedev</h2>
                        <div className={s.table}>
                            <div className={s.divTel}>
                                <div className={s.divs}>
                                    <img alt={'icon'} className={s.icon} src={addressIcon}/>
                                    3A Goreckogo Street, Minsk, Belarus.
                                </div>
                                <div>
                                    <img alt={'icon'} className={s.icon} src={telIcon}/>
                                    +375(44)722-00-42
                                </div>
                            </div>
                            <div className={s.divTel}>
                                <div>
                                    <a href={'https://github.com/Kiri1111'}>
                                        <img alt={'icon'} className={s.icon} src={gitHubIcon}/> GitHub
                                    </a>
                                </div>
                                <div>
                                    <a href={'https://t.me/MedvedevKirill92'}>
                                        <img alt={'icon'} className={s.icon} src={telegramIcon}/> Telegram
                                    </a>
                                </div>
                                <div>
                                    <a href={'https://www.linkedin.com/in/kirill-medvedev-a75893253/'}>
                                        <img alt={'icon'} className={s.icon} src={linkedinIcon}/> Linkedin
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3> &copy; 2023 All rights reserved</h3>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

