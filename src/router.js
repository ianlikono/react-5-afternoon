import React from "react";
import { Route, Switch } from "react-router-dom";
import Finish from "./components/Finish/Finish";
import NextBtn from "./components/NextBtn/NextBtn";
import WizardEight from "./components/WizardEight/WizardEight";
import WizardFive from "./components/WizardFive/WizardFive";
import WizardFour from "./components/WizardFour/WizardFour";
import WizardNine from "./components/WizardNine/WizardNine";
import WizardOne from "./components/WizardOne/WizardOne";
import WizardSeven from "./components/WizardSeven/WizardSeven";
import WizardSix from "./components/WizardSix/WizardSix";
import WizardTen from "./components/WizardTen/WizardTen";
import WizardThree from "./components/WizardThree/WizardThree";
import WizardTwo from "./components/WizardTwo/WizardTwo";

export default (
  <Switch>
    <Route exact path="/" component={NextBtn} />
    <Route path="/wOne" component={WizardOne} />
    <Route path="/wTwo" component={WizardTwo} />
    <Route path="/wThree" component={WizardThree} />
    <Route path="/wFour" component={WizardFour} />
    <Route path="/wFive" component={WizardFive} />
    <Route path="/wSix" component={WizardSix} />
    <Route path="/wSeven" component={WizardSeven} />
    <Route path="/wEight" component={WizardEight} />
    <Route path="/wNine" component={WizardNine} />
    <Route path="/wTen" component={WizardTen} />
    <Route path="/wEleven" component={WizardTen} />
    <Route path="/finish" component={Finish} />
  </Switch>
);
