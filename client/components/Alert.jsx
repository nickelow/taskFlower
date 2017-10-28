import React from 'react';
const styles = {width: '400px', backgroundColor: 'YellowGreen'}


class Alert extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div class="ui message" stlye={styles}>
				<i class="close icon" onClick={this.props.dismissAlert}></i>
				<p>The list was updated and saved.</p>
			</div>
		)
	}
}

export default Alert