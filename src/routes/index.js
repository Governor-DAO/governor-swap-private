import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./loader";

// ROUTES
import OnPageChange from "../utilities/hocs/OnPageChange";

// HEADER & FOOTER
import Header from "../governor-common/components/header/Header";
import Footer from "../governor-common/components/footer/Footer";

// LAZY IMPORT
// const Swap = lazy(() => import("../components/swap"));

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <OnPageChange>
            <Header />
            <Switch>
              {/* <Route exact path={"/"} component={Swap} /> */}
              <Route
                component={() => {
                  window.location.href = "https://governordao.org";
                  return null;
                }}
              />
            </Switch>
            <Footer />
          </OnPageChange>
        </Suspense>
      </BrowserRouter>
    );
  }
}
