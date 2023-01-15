import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Сontacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={s.content}>
                    <h2>Контакты :</h2>
                    <form className={s.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea rows={10}/>
                        <button className={s.but} type={'submit'}>Send</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

