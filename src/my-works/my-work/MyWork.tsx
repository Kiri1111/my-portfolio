import React from 'react';
import s from './MyWork.module.scss'

type MyWorkPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
}
export const MyWork = (props: MyWorkPropsType) => {
    return (
        <div className={s.work}>
            <div className={s.project}>
                <div className={s.imgContainer} style={props.style}>
                    {/*<div className={s.img}></div>*/}
                    <a className={s.button}>View more</a>
                </div>
                <div className={s.titleProject}>{props.title}</div>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

