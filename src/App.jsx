import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Experience from './containers/Experience';
import Projects from './containers/Projects';
import GithubProfile from './containers/GithubProfile'
const App = () => {
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Switch>
                <Route path="/" exact render={props => (
                    <>
                        <Navigation />
                        <Greetings />
                        <Skills />
                        <Experience />
                        <Projects />
                        <GithubProfile />
                    </>
                )} />


                <Route path="/hello" exact render={props => (
                    <>
                     <Navigation />
                     <Greetings />
                      <h1>hello</h1>
                    </>
                )} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;