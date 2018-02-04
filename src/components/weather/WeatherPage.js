
import React, { Component } from 'react';
import { Icon, Grid, Segment, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Imperial from './../shared/Imperial';
import Metric from './../shared/Metric';
import WeatherByUnit from './WeatherByUnit';
import ToggleUnit from './../shared/ToggleUnit';
import formatDate from './../shared/formatDate';

export default class WeatherPage extends Component {
    constructor(props){
	super(props);
	this.state = {
	    unit: true,
	    metricTemp: '',
	    imperialTemp: '',
	    metricWindSpeed: '',
	    imperialWindSpeed: '',
	    weatherDescription: '',
	    dateTime: '',
	};
	this.handleImperialUnitClick = this.handleImperialUnitClick.bind(this);
	this.handleMetricUnitClick = this.handleMetricUnitClick.bind(this);
    }
    
    componentDidMount() {
	const metricUrl = "//api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&APPID=574178f2a74485b1d6ef81ba179bd59c";
	fetch(metricUrl, {mode: 'cors'} )
	    .then( response =>  response.json())
	    .then( res => {
		this.setState({
		    weatherDescription: res.weather[0].description,
		    dateTime: res.dt,
		    metricTemp: res.main.temp,
		    metricWindSpeed: res.wind.speed
		});
	    }).catch((error) => console.log('error happened while fetching Metric Data: ' + error ) );

	const imperialUrl = "//api.openweathermap.org/data/2.5/weather?q=Lagos&units=imperial&APPID=574178f2a74485b1d6ef81ba179bd59c";

	fetch(imperialUrl, {mode: 'cors'} )
	    .then( response =>  response.json())
	    .then( res => {
		this.setState({
		    dateTime: res.dt,
		    imperialTemp: res.main.temp,
		    imperialWindSpeed: res.wind.speed
		});
	}).catch((error) => console.log('error happened again while fetching Imperial Data: '  + error ) );

    }


    handleImperialUnitClick(e){
	e.preventDefault();
	this.setState({
	    unit: false
	});
    }

    handleMetricUnitClick(e){
	e.preventDefault();
	this.setState({
	    unit: true
	});
    }

    render(){
	return (
	    <div>
		<Grid container >
		    <Grid.Column >
			<Header as="h3" color="violet"> Weather (Lagos-Nigeria) <span style={{color: 'grey' }}> -- current weather:  {this.state.weatherDescription} </span></Header> 

			<Segment raised style={{marginTop: '1em'}}>
			    <ToggleUnit imperialClick={this.handleImperialUnitClick}
					metricClick={this.handleMetricUnitClick}
			    />
			     
			    <WeatherByUnit
				unit={this.state.unit}
				dateTime={formatDate(this.state.dateTime)}
				metricWindSpeed={this.state.metricWindSpeed}
				metricTemp={this.state.metricTemp}

				imperialWindSpeed={this.state.imperialWindSpeed}
				imperialTemp={this.state.imperialTemp}
			    />
			</Segment>
			<Button color="teal" as={Link} to="/sun" > Sunrise & Sunset  Info <Icon name="double right angle" /> </Button>
		    </Grid.Column>
		</Grid>
	    </div> 
	);
    }
}
