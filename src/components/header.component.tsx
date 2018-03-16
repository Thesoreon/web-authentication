import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface IProps {
    authenticated: boolean;
}

class Header extends React.Component<IProps> {
    renderLinks() {
        if (this.props.authenticated) {
            return(
                <li>
                    <Link to="/signout">Sign out</Link>
                </li>
            );
        } else {
            return [
                <li key={1}><Link to="/signin">Sign in</Link></li>,
                <li key={2}><Link to="/signup">Sign up</Link></li>
            ];
        }
    }

    render() {
        return(
            <nav>
                <Link to="/">HOME</Link>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);
