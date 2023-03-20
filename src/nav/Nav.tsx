import React from 'react';
import s from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={s.main} href={'#Main'}>Main</a>
            <a className={s.tech} href={'#Skills'}>Technologies</a>
            <a className={s.projects} href={'#MyWorks'}>My projects</a>
            {/*<Link activeClass={s.active} to={'MyWorks'} spy={true} smooth={true} offset={-70} duration={500}>My*/}
            {/*    projects</Link>*/}
            <a className={s.contacts} href={'#Contacts'}>Contacts</a>

        </div>
    );
};

