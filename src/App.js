import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import TShirtDetails from "./pages/tshirt-details/TShirtDetails";
import MugsDetails from "./pages/mugs-details/MugsDetails";
import BCardsDetails from "./pages/b-cards-details/BCardsDetails";
import DFlyersDetails from "./pages/d-flyers-details/DFlyersDetails";
import StampsDetails from "./pages/stamps-details/StampsDetails";
import EnvelopesDetails from "./pages/envelopes-details/EnvelopesDetails";
import Checkout from "./components/checkout/Checkout";
import ScrollToTop from "./utils/ScrollToTop";
import Payment from "./components/payment/Payment";
import "./style.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SignIn from "./pages/sign-in/SignIn";
import { useStateValue } from "./context/StateProvider";
import { auth } from './firebase/firebase'

const promise = loadStripe(
    "pk_test_51JOFCUEi9v2WiQ6ftFZzfcvD2sNeld6MvmXwL217qJJBBXWcbr58blHqNhdG6yU4EbvR6TQfIAPlaNHSfFiSZQ3500l1NdFw1D"
);

const App = () => {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/sign-in">
                    <SignIn />
                </Route>

                <Route path="/payment">
                    <Layout>
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Layout>
                </Route>

                <Route path="/checkout">
                    <Layout>
                        <Checkout />
                    </Layout>
                </Route>

                <Route path="/envelopes-details">
                    <Layout>
                        <EnvelopesDetails />
                    </Layout>
                </Route>

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
