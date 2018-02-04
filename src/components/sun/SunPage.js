import React, { Component } from 'react';
import { Icon, Grid, Segment, Header, Button, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import formatDate from './../shared/formatDate';


export default class SunPage extends Component {

    constructor(props){
	super(props);
	this.state = { sunrise: '', sunset: '', dateTime: '' };
    }

    componentDidMount(){
	const metricUrl = "//api.openweathermap.org/data/2.5/weather?q=Lagos&APPID=574178f2a74485b1d6ef81ba179bd59c";
	fetch(metricUrl, {mode: 'cors'} )
	    .then( response =>  response.json())
	    .then( res => {
		this.setState({
		    sunrise: res.sys.sunrise,
		    sunset: res.sys.sunset,
		    dateTime: res.dt
		});
	    }).catch((error) => console.log('error happened while fetching Metric Data: ' + error ) );

    }
    
    render(){

	let sunrise =  new Date((this.state.sunrise)*1000);
	let sunset =  new Date((this.state.sunset)*1000);

	let sunrise_hour = sunrise.getHours();
	let sunrise_min = sunrise.getMinutes();

	let sunset_hour = sunset.getHours();
	let sunset_min = sunset.getMinutes();

	return (
	    <Grid container >
		<Grid.Column >
		    <Header as="h3" color="violet"> Sunrise & Sunset (Lagos-Nigeria) </Header>
		    <Segment raised style={{marginTop: '1em'}} >
			<List relaxed >
			    <List.Item>
				<List.Icon name='clock' color="teal" />
				<List.Content>Date&Time: {formatDate(this.state.dateTime)} </List.Content>
			    </List.Item>
			    	    
			    <List.Item>
				<List.Icon name='sun' color="yellow" />
				<List.Content>Sunrise: {sunrise_hour} : {sunrise_min} </List.Content>
			    </List.Item>

			    <List.Item>
				<List.Icon name='sun' color="grey" />
				<List.Content> Sunset: {sunset_hour} : {sunset_min}</List.Content>
			    </List.Item>
			    
			</List>
		    </Segment>
		    <Button color="teal" as={Link} to="/" > Weather Info <Icon name="double right angle" /> </Button>
		</Grid.Column>
	    </Grid>
	);
    }
}
