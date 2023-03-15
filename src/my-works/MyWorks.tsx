import React from 'react';
import s from './MyWorks.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {MyWork} from './my-work/MyWork'
import {Title} from "../common/components/title/Title";
import socialImg from '../assets/images/social-networking.webp'
import todoImg from '../assets/images/todolist.jpg'

export const MyWorks = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todo = {
        backgroundImage: `url(${todoImg})`
    }
    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <Title text={'My projects'}/>
                <div className={s.myWorks}>
                    <MyWork style={todo}
                            title={'To Do List'}
                            description={'Create todolist. It is a list of things you need to do or want to do. Traditionally, they are written on a piece of paper and organized in order of priority. When a task is completed, it is usually crossed off the list.'}/>
                    <MyWork style={social}
                            title={'Social network'}
                            description={'Find your friends. This is an Internet platform, a site that allows users registered on it to post information about themselves and communicate with each other, establishing social connections. '}/>
                </div>
            </div>
        </div>
    );
};

