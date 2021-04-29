import {useState, useEffect} from "react";

// eslint-disable-next-line no-empty-function
const noop = () => {};

export default (initialSeconds, initialRunning = false, onFinished=noop) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [running, setRunning] = useState(initialRunning);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (running) {
            setIntervalId(
                setInterval(
                    () => setSeconds(Math.max(0, seconds - 1)),
                    // if seconds-1 > 0 it will keep the result, if not it will display 0
                    1000,
                ),
            );

            if (seconds === 0) {
                setRunning(false);
                onFinished();
            }
        } else if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [running, seconds]);

    return [
        {seconds, running},
        {setSeconds, setRunning},
    ];
};
