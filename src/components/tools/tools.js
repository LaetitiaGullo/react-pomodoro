import React from "react";
import PropTypes from "prop-types";

import {NBSP} from "../../core/const";
import Button from "./button";

const Tools = ({running, onStartPause, onReset, onPlus, onMinus}) => {
    return (
    <div className={""}>
        <Button
            label={"-"}
            title={"Remove 1 minute"}
            disabled={running}
            onClick={onMinus}
        />
        {NBSP}
        <Button
            label={"Reset"}
            disabled={running}
            onClick={onReset}
        />
        {NBSP}
        <Button
            label={running ? "Pause" : "Start"}
            title={`${running ? "Pause" : "Start"} the timer`}
            onClick={onStartPause}
        />
        {NBSP}
        <Button
            label={"+"}
            title={"Add 1 minute"}
            disabled={running}
            onClick={onPlus}
        />
        {NBSP}
    </div>
    )
};

Tools.propTypes = {
    running: PropTypes.bool,
    onStartPause: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired
};

export default Tools;
