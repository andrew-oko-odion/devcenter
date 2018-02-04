
import React, { Component } from 'react';
import { Menu, Icon, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class TopNavigation extends Component {

    constructor(props){
	super(props);
	this.state = {};
	this.handleItemClick = this.handleItemClick.bind(this);
    }
    
	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	
	render() {
	    const { activeItem } = this.state;

	    return (
		<Menu borderless>
		    <Container >
			<Menu.Item as={Link} to="/"
				   active={activeItem === 'home'}
				   onClick={this.handleItemClick}
			>
			    <Icon name="cloud" color="violet" />
			    Weather
			</Menu.Item>


			<Menu.Item as={Link} to="/sun" 
				   active={activeItem === 'sun'}
				   onClick={this.handleItemClick}
			>
			    <Icon name="sun" color="yellow" /> 
			    Sunrise & Sunset
			</Menu.Item>
			

			<Menu.Menu position="right">
			    <Menu.Item as={Link} to="/about" 
				       active={activeItem === 'about'}
				       onClick={this.handleItemClick}
			    >
				About 
			    </Menu.Item>
			</Menu.Menu>
		    </Container>
		</Menu>
	    );
	}
    }
