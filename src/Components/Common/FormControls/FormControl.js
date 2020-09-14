import React from "react";
import s from './FormControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error ? s.error : "" ;
    return (
        <div className={s.formControl + " " + hasError}>
            <input {...input} {...props} />
            {
                hasError && <span className={s.error_field}>Some Error</span>
            }
        </div>
    )
}