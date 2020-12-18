import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from '../headerandfooter/HeaderComponent';
import FooterComponent from '../headerandfooter/FooterComponent';
import HomeComponent from '../general/HomeComponent';
import SignInComponent from '../signupandsignin/SignInComponent';
import SignUpComponent from '../signupandsignin/SignUpComponent';
import CarStock from '../general/CarStock';
import CarStockComponent from '../general/CarStockComponent';
import ListCarStockComponent from '../general/ListCarStockComponent';


class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent />
                        <Switch>
                            <Route exact path="/"><HomeComponent /></Route>
                            <Route path="/SignIn"><SignInComponent /></Route>
                            <Route path="/CreateNewUser/:id" component={SignUpComponent} />
                            <Route path="/theCarStock/:id" component={CarStock} /> {/*Create */}
                            <Route path="/carstock/:id/:brand" component={CarStockComponent} /> {/*Update */}
                            <Route path="/CarStock" exact component={ListCarStockComponent} />
                            {/* <Route path="/FlashcardSets" component={FlashcardSetComponent} />
                            <Route path="/cardSet" component={FlashcardComponent} />
                            <Route path="/:username/:password/:userID/:flashcardsSetID" component={FlashcardComponent} /> */}
                        </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

export default RouterComponent