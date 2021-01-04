import React from "react";
import { Home } from "./views/Home";
import { Education } from "./views/Education";
import { Experience } from "./views/Experience";
import { Project } from "./views/Project";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Education" component={Education} />
                <Route exact path="/Experience" component={Experience} />
                <Route exact path="/Project" component={Project} />
            </Switch>
            <Contact />
        </div>
    );
};

export default Routes;
