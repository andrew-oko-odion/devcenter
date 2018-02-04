
import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';

export default class Metric extends Component {

    constructor(props){
	super(props);
    }

    render(){	
	return(
		<div>
		    <Header as="h4" color="grey">  Metric (&#x2103;)</Header>
		    <List relaxed >
			<List.Item>
			    <List.Icon name='clock' color="teal" />
			    <List.Content>Date&Time:  {this.props.dateTime}</List.Content>
			</List.Item>
			<List.Item>
			    <List.Icon name='sun' color="yellow" />
			    <List.Content>Tempreture: {this.props.metricTemp} &#x2103; </List.Content>
			</List.Item>
		    
		    <List.Item>
			<List.Icon name='fire' color="green" />
			<List.Content>Wind Speed: {this.props.metricWindSpeed} m/s </List.Content>
		    </List.Item>
		  
		    </List>
		</div>  
	);
    }
}
