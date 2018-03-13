import * as React from "react";
import { Route, Switch } from "react-router-dom";

/* Components */
import Header from "./header.component";
import SignIn from "./auth/signin.component";

export default class Index extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <SignIn/>
                <Switch>
                    <Route path="/ha" component={Header}/>
                </Switch>
            </div>
        );
    }
}
