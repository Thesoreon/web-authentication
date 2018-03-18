import * as React from "react";
import { connect } from "react-redux";
import { fetchMessage } from "../actions";

interface IProps {
    example: string;
    fetchMessage: any;
    message: string;
}

class Feature extends React.Component<IProps> {
    componentWillMount() {
        this.props.fetchMessage();
    }

    render() {
        return(
            <div>{this.props.message}</div>
        );
    }
}

function mapStateToProps(state: any) {
    return { message: state.auth.message };
}

export default connect(mapStateToProps, { fetchMessage })(Feature);
