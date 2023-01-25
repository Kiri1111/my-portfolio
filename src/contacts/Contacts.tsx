import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Сontacts.module.scss'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={s.content}>
                    <Title text={'Contacts :'}/>
                    <form className={s.form}>
                        <input type="text" placeholder={'Name'}/>
                        <input type="text" placeholder={'E-mail'}/>
                        <textarea rows={10} placeholder={'Your message'}/>
                        <a className={s.button}>Send message</a>
                    </form>
                </div>
            </div>
        </div>
    );
};

