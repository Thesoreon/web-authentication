import * as React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Redirect } from "react-router-dom";

interface IField {
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
                <button>Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "SignIn"
})(connect(null, actions)(SignIn));
