import React from 'react';
import TaskButton from './TaskButton.jsx';
import SaveButton from './SaveButton.jsx';

const styles = {'position': 'absolute', 'top': '25px', 'right': '17%', 'width': '400px', 'height': '100px', 'display': 'inline-block'}

class ButtonBar extends React.Component {
	constructor(props) {
		super(props)
	}
	render(){
		return(
	    <div class="ui buttons" style={styles}>
	      <div className="buttons"><TaskButton addCard={this.props.addCard}/></div>
	      <div className="buttons"><SaveButton saveCards={this.props.saveCards}/></div>
		  </div>
		)
	}
}

export default ButtonBar;