import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import footerImg from "../assets/images/footer.png";
import phone from '../assets/icons/phone.png'
import address from '../assets/icons/address.png'
import gitHubI from '../assets/icons/github.png'

export const Footer = () => {
    const footer = {
        backgroundImage: `url(${footerImg})`
    }
    const telIcon = phone
    const addressIcon = address
    const gitHubIcon = gitHubI
    return (
        <div className={s.footerBlock} style={footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.contant}>
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
                            <a href={'https://github.com/Kiri1111'}>
                                <img alt={'icon'} className={s.icon} src={gitHubIcon}/> GitHub
                            </a>
                        </div>
                    </div>
                    <h3> &copy; 2023 All rights reserved</h3>
                </div>
            </div>
        </div>
    );
};

