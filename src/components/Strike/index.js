import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Strike({children, className}) {
    return (
        <span className={useBluelibClassNames("style-strike", className)}>
            {children}
        </span>
    )
}


Strike.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
