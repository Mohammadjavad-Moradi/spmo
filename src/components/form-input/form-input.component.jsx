import React from 'react';

import styles from './form-input.module.scss';

const FormInput = ({label, handleChange, ...otherProps}) => (
    <div>
        <input onChange={handleChange} {...otherProps} />
        {
            label ? 
            (
                <label>{label}</label>
            )
            : null
        }
    </div>
);

export default FormInput;