import React from "react"
import PropTypes from 'prop-types'

import Ciphers from "./ciphers"

const styles = {
    fontSize: "10rem",
    textAlign: "center"
}

const Display = ({seconds, running=false}) => {
    let separator = ":"

    if (running) {
        separator = seconds % 2 ? ":":""
    }

    return (
        <div style={styles}>
            <Ciphers value={Math.floor(seconds/60)} />
            <span>{":"}</span>
            <Ciphers value={seconds%60} />
        </div>
    )
}

Display.propTypes={
    seconds: PropTypes.number.isRequired,
    running: PropTypes.bool
}
// Define de type of props expected (ex: a number), only in development

export default Display