import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

const Button = (props) => {
    const {children,className,type,onClick} = props;
    return (
        <div>
            <button
                type={type}
                className={className}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;

