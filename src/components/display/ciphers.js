import React from "react"
import PropTypes from 'prop-types';

const Ciphers = ({value}) => {
    return (
    <span>
        {`${value}`.padStart(2, "0")}
    </span>
    )
    // Display the good format (for example 24 min 09, not 24:9)
}

Ciphers.propTypes={
    value: PropTypes.number.isRequired
}
// Define de type of props expected (here a number), only in development

export default Ciphers