import React from 'react';
import Landing from './landingpage';
import {Switch , Route} from "react-router-dom";
import About from './aboutme';
import Resume from './resume';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/aboutme" component={About}></Route>
        <Route path="/resume" component={Resume}></Route>
    </Switch>   
        
)

export default Main;