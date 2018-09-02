import { NavLink, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

import AboutPage from "Components/AboutPage";
import HomePage from "Components/HomePage";
import NotFoundPage from "Components/NotFoundPage";

class App extends React.Component {
  render() {
    const activeClassName = 'main-nav__link--active';
    return (
      <div className='row'>
        <nav className='main-nav'>
          <NavLink exact to="/" className='main-nav__link' activeClassName={activeClassName}>Home</NavLink>
          <NavLink to="/about" className='main-nav__link' activeClassName={activeClassName}>About</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
