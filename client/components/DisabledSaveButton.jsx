import React from 'react';
import reactDOM from 'react-dom';

class DisabledSaveButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modified: false
    }
  }
  
  render(){
    return(
      <button class="ui disabled button">
        <i class="checkmark icon"></i>
          Save
      </button>
    ) 
  }
}

export default DisabledSaveButton;