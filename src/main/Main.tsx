import React from 'react';
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Привет всем!</span>
                    <h1>Меня зовут Кирилл</h1>
                    <p>я front-end разработчик</p>
                </div>
                <div className={s.photo}>
                    <h3>My photo</h3>
                </div>
            </div>
        </div>
    );
};

