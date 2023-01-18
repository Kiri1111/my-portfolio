import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={s.main} href={''}>Main</a>
            <a className={s.tech} href={''}>Technologies</a>
            <a className={s.projects} href={''}>My projects</a>
            <a className={s.contacts} href={''}>Contacts</a>

        </div>
    );
};

