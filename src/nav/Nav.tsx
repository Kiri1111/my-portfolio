import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.nav}>
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
    );
};

