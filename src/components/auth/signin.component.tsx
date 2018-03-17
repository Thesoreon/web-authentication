import * as React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Redirect } from "react-router-dom";

export interface IField {
    meta: {
        touched: boolean;
        error: object;
    };
    input: object;
    label: string;
    type: string;
}

interface IProps {
    handleSubmit: any;
    signinUser: any;
    history: any;
    errorMessage: string;
}

class SignIn extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    renderField(field: IField) {
        const { meta: { touched, error } } = field;
        return(
            <div>
                <input type={field.type} placeholder={field.label} {...field.input}/>
            </div>
        );
    }

    renderErrorMessage() {
        if (this.props.errorMessage) {
            return (
                <div>{this.props.errorMessage}</div>
            );
        }
    }

    submitForm(values: object) {
        this.props.signinUser(values, () => {
            this.props.history.push("/feature");
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.submitForm)}>
                <Field name="email" label="Email" type="text" component={this.renderField} />
                <Field name="password" label="Password" type="password" component={this.renderField} />
                {this.renderErrorMessage()}
                <button>Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state: any) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: "SignIn"
})(connect(mapStateToProps, actions)(SignIn));
