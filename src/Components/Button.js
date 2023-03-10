import React from "react";

function Button({buttonClick, isDisabled}) {
    return (
        <button
        type="button"
        onClick={buttonClick}
        disabled={isDisabled}
        >
        </button>)
}

export default Button;