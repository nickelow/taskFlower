import React from 'react';
import reactDOM from 'react-dom';
import Task from './Task.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }
  render(){
    return(
      <ul>
      {this.state.tasks.map(function(task, i){
        <Task key={i} index={i} title={task.title} text={task.text}/>
      })}
      </ul>
    )
  }
}