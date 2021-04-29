import React,/* From a default export -> no {} */
{useState, useCallback}
/* useCallback = not re-declare a function if the value(s) in [] doesn't change (for optimization)
example in handlePlus and it can be the same for handleMinus */
from "react";


import {SESSION_DURATION /*as duration*/} from "../core/const";
// From an export of a const with a name -> {}
// If I want to change the name, use "as"

import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
    const [seconds, setSeconds] = useState(SESSION_DURATION);
    const [running] = useState(false);

    const handleMinus = () => setSeconds(seconds < 60 ? 0 : seconds - 60);
    // or : setSeconds(Math.max(seconds-60,0)) = if seconds-60 > 0 it keep the result, if not it will display 0
    const handlePlus = useCallback(() => setSeconds(seconds + 60), [seconds]);
    // see the comment at the top to understand why useCallback
    const handleStartPause = () => console.warn("handleStartPause");
    const handleReset = () => setSeconds(SESSION_DURATION);

    return (
        <div className="columns is-mobile is-centered">
            <div className="column is-half">
                <Display seconds={seconds} running={running} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onPlus={handlePlus}
                    onStartPause={handleStartPause}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
};

export default Pomodoro;
