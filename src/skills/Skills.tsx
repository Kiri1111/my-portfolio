import React from 'react';
import s from './Skills.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from './skill/Skill';
import reactI from '../assets/icons/react.png'
import typescriptI from '../assets/icons/typescript.png'
import restApiI from '../assets/icons/restApi.png'
import axiosI from '../assets/icons/axios.png'
import reduxI from '../assets/icons/redux.png'
import javascriptI from '../assets/icons/javascript.png'
import {Title} from "../common/components/title/Title";
import Fade from 'react-awesome-reveal';

export const Skills = () => {
    const reactIcon = reactI
    const typeScriptIcon = typescriptI
    const restApi = restApiI
    const axios = axiosI
    const redux = reduxI
    const javaScript = javascriptI

    return (

        <div className={s.skillsBlock}>

            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'My skills'}/>
                <div className={s.skills}>
                    <Fade>
                        <Skill title={"React"}
                               icon={reactIcon}
                               description={'React is a JavaScript library for building user interfaces.'}/>
                        <Skill title={'Java script'}
                               icon={javaScript}
                               description={'JavaScript is a programming language that developers use to create interactive web pages.'}/>
                        <Skill title={'Type script'}
                               icon={typeScriptIcon}
                               description={'TypeScript is a web development programming language based on JavaScript.'}/>
                        <Skill title={'Redux'}
                               icon={redux}
                               description={'Redux is a library designed to manage application state. Most often used in conjunction with React for front-end development.'}/>
                        <Skill title={'Rest API'}
                               icon={restApi}
                               description={'The Rest API is responsible for almost all interactions between server and client applications.'}/>
                        <Skill title={'Axios'}
                               icon={axios}
                               description={'Axios is a library for making either HTTP requests in Node.js or XMLHttpRequests in the browser. It supports promises, which is new to ES6.'}/>
                    </Fade>
                </div>
            </div>
        </div>

    );
};

