
import React, { Component } from 'react';
import { Divider, Icon } from 'semantic-ui-react';


export default class Footer extends Component {

    render() {

	return (
	    <div style={{ marginTop: '20em' }}> 
	    <Divider />
		<center> Drew <Icon name="copyright" /> 2018 </center>
	    </div>
	);
    }
}
