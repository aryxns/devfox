import './App.css';
import './assets/output.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Content from "./components/content";
import Read from "./components/read";
import Writer from "./components/write";
import Login from "./components/login";
import Tasks from "./components/tasks";
import UserInput from "./components/Update";
import Leaderboard from "./components/leaderboard";
import QuestionSuccess from "./components/question_sucess";
import AccountSuccess from "./components/account_success";
import LandingPage from "./components/landing";
import DailyUpdates from "./components/daily";
import WriteUpdate from "./components/write_update";
import UpdateSuccess from "./components/update_success";
import Rules from "./components/rules";
//  <Route path="/join" component={UserInput} />
// <a href="/join"><button className="bg-blue-300 font-mono rounded-xl mr-2"><h4 className="p-2">Join</h4></button></a>

function App() {
  return(
  <div>
    <Switch>
        <Route path="/home" component={Tasks} exact />
        <Route path="/" component={LandingPage} exact/>
        <Route path="/rules" component={Rules} />
        <Route path="/leaderboard" component={Leaderboard}/>
        <Route path="/read" component={Read}/>
        <Route path="/write_update" component={WriteUpdate} />
        <Route path="/community" component={Content} />
        <Route path="/update_success" component={UpdateSuccess}/>
        <Route path="/account_success" component={AccountSuccess} />
        <Route path="/question_success" component={QuestionSuccess}/>
        <Route path="/updates" component={DailyUpdates} />
        <Route path="/write" component={Writer}/>
        <Route path="/join" component={UserInput}/>
        <Route path="/login" component={Login}/>
    </Switch>
    <div id="sign-in-status"></div>
    <div id="sign-in"></div>
    <pre id="account-details"></pre>
</div>)
};

export default App;