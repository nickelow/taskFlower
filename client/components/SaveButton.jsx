import React from 'react';
import reactDOM from 'react-dom';

class SaveButton extends React.Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
        <button class="ui active button" onClick={this.props.saveCards}>
          <i class="user icon"></i>
          Save
        </button>
    ) 
  }

}

export default SaveButton;