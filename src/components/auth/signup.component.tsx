import * as React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { signUpUser } from "../../actions";
import { IField } from "./signin.component";

interface IProps {
    handleSubmit: any;
    signUpUser: any;
    history: any;
    errorMessage: string;
}

interface IInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

class SignUp extends React.Component<IProps> {

    componentWillMount() {
        this.formSubmit = this.formSubmit.bind(this);
    }

    renderField(field: IField) {
        const { meta: { touched, error } } = field;
        return(
            <div>
                <input type={field.type} placeholder={field.label} {...field.input}/>
                <p className="formError">{touched ? error : ""}</p>
            </div>
        );
    }

    formSubmit(values: IInputs) {
        this.props.signUpUser(values, () => {
            this.props.history.push("/feature");
        });
    }

    renderErrorMessage() {
        if (this.props.errorMessage) {
            return(
                <div>{this.props.errorMessage}</div>
            );
        } else {
            return null;
        }
    }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.formSubmit)}>
                <Field name="email" label="Email" type="text" component={this.renderField}/>
                <Field name="password" label="Password" type="password" component={this.renderField}/>
                <Field name="confirmPassword" label="Confirm Password" type="password" component={this.renderField}/>
                {this.renderErrorMessage()}
                <button>Sign Up</button>
            </form>
        );
    }
}

function validate(values: IInputs) {
    const errors = { confirmPassword: "", password: "", email: "" };

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match!";
    }
    if (!values.password) {
        errors.password = "Password is not optional!";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password is not optional!";
    }
    if (!values.email) {
        errors.email = "Email is not optional!";
    }

    return errors;
}

function mapStateToProps(state: any) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: "SignUp",
    validate
})(connect(mapStateToProps, { signUpUser })(SignUp));
