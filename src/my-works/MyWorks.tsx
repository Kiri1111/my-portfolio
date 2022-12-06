import React from 'react';
import s from './MyWorks.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {MyWork} from './my-work/MyWork'

export const MyWorks = () => {
    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <h2 className={s.title}>Мои работы:</h2>
                <div className={s.myWorks}>
                    <MyWork title={'Todo List'} description={'Создание списков дел, необходимых к выполнению.'}/>
                    <MyWork title={'Social network'} description={'Социальная сеть.'}/>
                </div>
            </div>
        </div>
    );
};

