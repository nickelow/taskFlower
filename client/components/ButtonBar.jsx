import React from 'react';
import TaskButton from './TaskButton.jsx';
import SaveButton from './SaveButton.jsx';
import DisabledSaveButton from './DisabledSaveButton.jsx'

import Alert from "./Alert.jsx";

const styles = {'position': 'relative', 'top': '20%', 'left': '60%', 'width': '400px', 'height': '100px', 'display': 'inline-block'}
const headerStyles ={'position': 'absolute', 'left': '5%', 'top': '8%',  'width': '40%'}
const barStyles = {'diplay': 'inline-block', 'verticalAlign': 'middle'};

class ButtonBar extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			modified:this.props.modified
		}
	}
	 componentWillReceiveProps(){
    this.setState({
      modified: this.props.modified
    })
  }
	render(){
		return([<div style={barStyles}>     <div class="ui header" style={headerStyles}>
        <i class="fa fa-list-alt fa-4x"></i>
        <div class="content" style={{'padding': '0.5rem 1rem', 'top': '50%'}}>
          Tasks
          <div class="sub header">Add and edit your tasks</div>
        </div>
      </div>,
					    <div class="ui buttons" style={styles}>
					      <div className="buttons"><TaskButton addCard={this.props.addCard}/></div>
					      <div className="buttons">{this.props.modified === false ? <DisabledSaveButton/> : <SaveButton saveCards={this.props.saveCards}/>}</div>
						  </div></div>]
		
		)
	}
}

export default ButtonBar;

