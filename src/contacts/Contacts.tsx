import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Сontacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={s.content}>
                    <h2>Contact :</h2>
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

