import React, { Component } from 'react';
import Imperial from './../shared/Imperial';
import Metric from './../shared/Metric';


export default class WeatherByUnit extends Component {

    render() {
	if ( this.props.unit === false ) {
	    return <Imperial
		       dateTime={this.props.dateTime}
		       imperialTemp={this.props.imperialTemp}
		       description={this.props.description}
		       imperialWindSpeed={this.props.imperialWindSpeed}
		       
		   />
	}
	
	return (
	    <Metric
		dateTime={this.props.dateTime}
		metricTemp={this.props.metricTemp}
		description={this.props.description}
		metricWindSpeed={this.props.metricWindSpeed}
	    />
	);

    }
}
