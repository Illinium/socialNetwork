import React from "react";
import s from './FormControl.module.css';
import {Field} from "redux-form";

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

export const createField = (name, lable, component, type, validators ) => {
    return <div>
        <label htmlFor={name}>{lable}</label>
        <Field name={name} component={Textarea} type={type} validate={validators} />
    </div>
}