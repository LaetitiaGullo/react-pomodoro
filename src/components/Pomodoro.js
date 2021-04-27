import React, {useState} from "react";
// From a default export -> no {}

import {SESSION_DURATION /*as duration*/} from "../core/const";
// From an export of a const with a name -> {}
// If I want to change the name, use "as"

import Display from "./display/display";

const Pomodoro = () => {
    const [timer] = useState(SESSION_DURATION);
    const [running] = useState(false)

    return (
        <div>
            <Display seconds={timer} running={running} />
        </div>
    );
};

export default Pomodoro;
