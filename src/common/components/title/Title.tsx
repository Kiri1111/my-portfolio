import React from 'react';
import s from "./Title.module.scss";

export const Title = (props: { text: string }) => {
    return (
        <div>
            <div className={s.title}>
                <h2>{props.text}</h2>
            </div>
        </div>
    );
};

