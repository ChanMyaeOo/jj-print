import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import TShirtDetails from './pages/tshirt-details/TShirtDetails'
import MugsDetails from './pages/mugs-details/MugsDetails'
import BCardsDetails from './pages/b-cards-details/BCardsDetails'
import DFlyersDetails from './pages/d-flyers-details/DFlyersDetails'
import StampsDetails from './pages/stamps-details/StampsDetails'
import "./style.css";

const App = () => {
    return (
        <Router>
            <Switch>

                <Route path="/stamps-details">
                    <Layout>
                        <StampsDetails />
                    </Layout>
                </Route>

                <Route path="/digital-flyers-details">
                    <Layout>
                        <DFlyersDetails />
                    </Layout>
                </Route>

                <Route path="/business-cards-details">
                    <Layout>
                        <BCardsDetails />
                    </Layout>
                </Route>

                <Route path="/mugs-details">
                    <Layout>
                        <MugsDetails />
                    </Layout>
                </Route>

                <Route path="/t-shirt-details">
                    <Layout>
                        <TShirtDetails />
                    </Layout>
                </Route>

                <Route path="/">
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
