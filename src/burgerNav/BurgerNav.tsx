import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import burgerI from '../assets/icons/burger.png'

export const BurgerNav = () => {


    const burgerIcon = {
        backgroundImage: `url(${burgerI})`
    }
    let [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>

                <Link activeClass={s.active} spy={true} smooth={true} offset={0
                }
                      duration={500} to={'Main'}>Main</Link>
                <Link activeClass={s.active} spy={true} smooth={true} offset={0
                }
                      duration={500} to={'Skills'}>Technologies</Link>
                <Link activeClass={s.active} spy={true} smooth={true} offset={0
                }
                      duration={500} to={'MyWorks'}>My projects</Link>
                <Link activeClass={s.active} spy={true} smooth={true} offset={0
                }
                      duration={500} to={'Contacts'}>Contacts</Link>

            </div>
            <div style={burgerIcon} onClick={onBurgerClick} className={s.burgerBtn}></div>
        </div>
    );
};

