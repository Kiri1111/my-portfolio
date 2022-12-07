import React from 'react';
import s from './MyWork.module.css'

type MyWorkPropsType = {
    title: string
    description: string
}
export const MyWork = (props: MyWorkPropsType) => {
    return (
        <div className={s.work}>
            <div className={s.project}>
                <div className={s.imgContainer}>
                    <div className={s.img}></div>
                    <a className={s.button}>Посмотреть</a>
                </div>
                <div className={s.titleProject}>{props.title}</div>
                <span className={s.description}>{props.description}</span>
            </div>
            <div></div>
        </div>
    );
};

