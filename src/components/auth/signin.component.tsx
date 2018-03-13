import * as React from "react";
import { reduxForm, Field } from "redux-form";

interface IField {
    meta: {
        touched: boolean;
        error: object;
    };
    input: object;
    label: string;
    type: string;
}

class SignIn extends React.Component {

    renderField(field: IField) {
        const { meta: { touched, error } } = field;
        return(
            <div>
                <input type={field.type} placeholder={field.label} {...field.input}/>
            </div>
        );
    }

    render() {
        return(
            <form>
                <Field name="email" label="Email" type="text" component={this.renderField} />
                <Field name="password" label="Password" type="password" component={this.renderField} />
                <button>Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "SignIn"
})(SignIn);
