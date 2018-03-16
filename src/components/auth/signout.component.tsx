import * as React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions";

interface IProps {
    signOut: any;
}

class SignOut extends React.Component<IProps> {
    componentWillMount() {
        this.props.signOut();
    }

    render() {
        return <div>Sorry to see you go..</div>;
    }
}

export default connect(null, { signOut })(SignOut);
