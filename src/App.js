import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';
import WeatherPage from './components/weather/WeatherPage';
import AboutPage from './components/AboutPage';
import SunPage from './components/sun/SunPage';
import TopNavigation from './components/shared/TopNavigation';
import Footer from './components/shared/Footer';

export default class App extends Component {
  render() {
    return (
	<div>
	    <TopNavigation />
	    <Route exact path="/" component={WeatherPage} />
	    <Route path="/about" component={AboutPage} />
	    <Route path="/sun" component={SunPage} />
	    <Footer />
	</div>
    );
  }
}

