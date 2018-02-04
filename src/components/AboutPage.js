
import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class AboutPage extends Component {

    render(){
	return (
	    <Grid container >
		<Grid.Column >
		    <Header as="h3" color="violet"> About App </Header>
			<p> All Data are being gotten form the openweather api. </p>

			<p> This is a simple demo task from dev center. </p>

			<p> And it was done by mr. Drew as quickly as I could under the limited time. </p>

			<Link to="/">  Nothing to say! take me to homepage </Link>
		</Grid.Column>
	    </Grid>
	);
    }
}
