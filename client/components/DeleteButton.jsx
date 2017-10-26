import React from 'react';


const styles = {
	'position': 'relative',
	'top': '20px',
	'left': '98%'
}
class DeleteButton extends React.Component {
	constructor(props) {
	  super(props);
	}
	render() {
	  return(
      <i class="fa fa-trash" aria-hidden="true" onClick= {this.props.deleteCard}  id= {this.props.id} style={styles}></i>
	  )
	}
}

export default DeleteButton