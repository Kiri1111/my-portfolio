import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
    icon: any
}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div>
                <img alt={'icon'} className={s.icon} src={props.icon}/>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description} </span>

        </div>
    );
};

