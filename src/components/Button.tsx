import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {
    return (
        <button className={'button'} onClick={props.callBack}>
            {props.title}
        </button>
    );
};

export default Button;