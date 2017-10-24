import React from 'react';
import reactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import List from './List.jsx'

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const serverPath = 'http://cfassignment.herokuapp.com/matthewnicolaou/tasks'

class Home extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
    this.getTasks = this.getTasks.bind(this);
  }

  getTasks(){
    axios.get(serverPath)
    .then(function(response){
      console.log(response.data)
    })
    .catch(function(err){
      console.log(err)
    })
  }

  render(){
    return([
    <div>Hello World</div>,
    <span><div className="well" style={wellStyles}>
      <Button bsStyle="primary" bsSize="large" block onClick={this.getTasks}>Block level button</Button>
    </div></span>
    , <span><List/></span>])
  }
}

export default Home; 

