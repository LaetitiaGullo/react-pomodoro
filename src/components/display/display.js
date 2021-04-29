import React from "react"
import PropTypes from 'prop-types'

import Ciphers from "./ciphers"

const styles = {
    fontSize: "10rem",
    textAlign: "center"
}

const Display = ({seconds}) => {

    return (
        <div style={styles}>
            <Ciphers value={Math.floor(seconds/60)} />
            <span /*style={{
                opacity: seconds % 2 ? 1 : 0
            }}*/>{":"}</span>
            <Ciphers value={seconds%60} />
        </div>
    )
}

Display.propTypes={
    seconds: PropTypes.number.isRequired,
}
// Define de type of props expected (ex: a number), only in development

export default Display