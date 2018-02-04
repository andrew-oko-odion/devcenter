
import React, { Component } from 'react';
import {  Button } from 'semantic-ui-react';

export default class ToggleUnit extends Component{

    constructor(props){
	super(props);
    }

    render(){ 
	return (
	    <div> 
		<Button color="grey" floated="right" onClick={this.props.imperialClick}>
		    Imperial (&#x2109;)
		</Button>
		<Button primary floated="right" onClick={this.props.metricClick}>
		    Metric (&#x2103;)
		</Button>
	    </div>
	);
    }
}


