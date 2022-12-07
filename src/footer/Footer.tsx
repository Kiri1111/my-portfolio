import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.contant}>
                    <h2>Кирилл Медведев</h2>
                    <div className={s.table}>
                        <span className={s.divs}></span>
                        <span className={s.divs}></span>
                        <span className={s.divs}></span>
                        <span className={s.divs}></span>
                    </div>
                    <h3> &copy; 2022 Все права защищены</h3>
                </div>
            </div>
        </div>
    );
};

