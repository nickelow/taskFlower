import React from 'react';

class FailureAlert extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div class="ui message">
				<i class="close icon" onClick={this.props.dismissAlert}></i>
				<p>Sorry, something went wrong. Please try again.</p>
			</div>
		)
	}
}

export default FailureAlert