import React from 'react';

class Alert extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div class="ui message">
				<i class="close icon" onClick={this.props.dismissAlert}></i>
				<p>The list was updated and saved.</p>
			</div>
		)
	}
}

export default Alert