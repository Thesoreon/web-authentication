import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

interface IProps {
    authenticated: boolean;
    history: any;
}

export default function(ComposedComponent: any) {
  class Authentication extends React.Component<IProps> {

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push("/");
      }
    }

    componentWillUpdate(nextProps: any) {
      if (!nextProps.authenticated) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state: any) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
