import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class HomePage extends Component {
    
    render(){
	return(
	    <Grid container >
		<Grid.Column >
		    <Header as="h3" color="violet"> Welcome to the lagos weather information App </Header>

		    <Link to="/weather"> Weather Info (Lagos) </Link> <br />
		    
		    <Link to="/sun"> Sunset & Sunrise Info (Lagos) </Link>
		</Grid.Column>
	    </Grid>
	);
    }
}
