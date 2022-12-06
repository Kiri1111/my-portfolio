import React from 'react';
import s from './DistantWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>
                <h2>Рассматриваю варианты удалённой работы</h2>
                <div className={s.but}>Нанять меня</div>
            </div>
        </div>
    );
};

