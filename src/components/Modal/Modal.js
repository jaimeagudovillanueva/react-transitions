import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 500
}

const modal = (props) => {
    return (
        <CSSTransition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit
            onExited={props.hide} classNames="fade-slide">
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    );
}

export default modal;