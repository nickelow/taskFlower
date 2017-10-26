import React from 'react';

class TaskButton extends React.Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
        <button class="ui right labeled icon button" onClick={this.props.addCard}>
          <i class="fa fa-plus" aria-hidden="true"></i>
             New Task
        </button>
    ) 
  }

}

export default TaskButton;