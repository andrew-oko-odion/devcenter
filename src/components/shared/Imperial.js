
import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
export default class Imperial extends Component {

    render(){

	return(
	    <div>
		<Header as="h4" color="grey"> Imperial  (&#x2109;) </Header>
		<List relaxed >
		    <List.Item>
			<List.Icon name='clock' color="teal" />
			<List.Content>Date&Time:  {this.props.dateTime}</List.Content>
		    </List.Item>
		    <List.Item>
			<List.Icon name='sun' color="yellow" />
			<List.Content>Tempreture: {this.props.imperialTemp} &#x2109; </List.Content>
		    </List.Item>
		    
		    <List.Item>
			<List.Icon name='fire' color="green" />
			<List.Content>Wind Speed: {this.props.imperialWindSpeed} m/h  </List.Content>
		    </List.Item>
		    
		</List>
	    </div> 
	);
    }
}
