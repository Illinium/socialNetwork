import React from "react";
import { reduxForm } from 'redux-form'
import {minLengthCreator, required} from "../../Utils/Validators/Validators";
import {createField, Textarea} from "../Common/FormControls/FormControl";
import s from "./LoginForm.module.css"

const minLength = minLengthCreator(5);

let LoginForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        {createField("email", "Email", Textarea, "email", [required])}
        {createField("password", "Password", Textarea, "password", [minLength, required])}
        {createField("rememberMe", "Remember Me", "input", "checkbox", [minLength, required])}
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