import React from 'react';
import s from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Мои навыки:</h2>
                <div className={s.skills}>
                    <Skill title={"React"}
                           description={'adыыыыыы ыывувуау dswrvv sb bdb dgn dg adwaawv faevev аув hicbwdo icbcib'}/>
                    <Skill title={'Type script'} description={'wkjebckwbeicbiwbwecblwdhb'}/>
                    <Skill title={'TDD'} description={'osacnacnanko'}/>
                </div>
            </div>

        </div>
    );
};

