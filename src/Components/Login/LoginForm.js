import React from "react";
import { Field, reduxForm } from 'redux-form'
import {minLengthCreator, required} from "../../Utils/Validators/Validators";
import {Textarea} from "../Common/FormControls/FormControl";
import s from "./LoginForm.module.css"

const minLength = minLengthCreator(5);

let LoginForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component={Textarea} type="email" validate={required} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component={Textarea} type="password" validate={[minLength, required]} />
        </div>
        <div>
            <label htmlFor="rememberMe">Remember Me</label>
            <Field name="rememberMe" component="input" type="checkbox" />
        </div>
        { props.error &&
            <div className={s.errorMessage}>{props.error}</div>
        }
        <button type="submit">Submit</button>
    </form>
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm;