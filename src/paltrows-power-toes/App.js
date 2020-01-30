import React, { Component } from "react";
import Nav from "../paltrows-power-toes/Nav";
import Header from "../paltrows-power-toes/Header";
import Footer from "../paltrows-power-toes/Footer";
import HomePage from "../paltrows-power-toes/HomePage";
import AboutPage from "../paltrows-power-toes/AboutPage";
import WorkoutsPage from "../paltrows-power-toes/WorkoutsPage";
import NotFoundPage from "../paltrows-power-toes/NotFoundPage";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "../styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/workouts" component={WorkoutsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
