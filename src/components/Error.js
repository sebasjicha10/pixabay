import React from "react"
import PropTypes from "prop-types"


const Error = ({message}) => (
        <p className="my-3 p-4 text-center alert alert-primary">{message}</p>
    )
 
Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error