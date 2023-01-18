import React from 'react';
import s from './DistantWork.module.scss'
import styleContainer from "../common/styles/Container.module.css";

export const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>
                <h2 className={s.title}>I'm looking into remote work options.</h2>
            </div>
        </div>
    );
};

