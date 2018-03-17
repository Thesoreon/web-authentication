import * as React from "react";
import { Route, Switch } from "react-router-dom";

/* Components */
import Header from "./header.component";
import SignIn from "./auth/signin.component";
import SignOut from "./auth/signout.component";
import SignUp from "./auth/signup.component";
import Feature from "./feature.component";

export default class Index extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/feature" component={Feature}/>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signout" component={SignOut} />
                    <Route path="/signin" component={SignIn}/>
                </Switch>
            </div>
        );
    }
}
