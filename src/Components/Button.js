import React from "react";

function Button({children, buttonClick, isDisabled}) {
    return (
        <button
        type="button"
        onClick={buttonClick}
        disabled={isDisabled}
        >
            { children }
        </button>)
}

export default Button;