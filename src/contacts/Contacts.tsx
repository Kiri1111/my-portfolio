import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Сontacts.module.scss'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div id={'Contacts'} className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={s.content}>
                    <Title text={'Contacts'}/>
                    <form className={s.form}>
                        <input className={s.input} type="text" placeholder={'Name'}/>
                        <input className={s.input} type="text" placeholder={'E-mail'}/>
                        <textarea className={s.input} rows={10} placeholder={'Your message'}/>
                        <button type={'submit'} className={s.button}>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

