import React from 'react';
import reactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import List from './List.jsx'

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const serverPath = 'http://cfassignment.herokuapp.com/matthewnicolaou/tasks'
const closePath ='https://app.close.io/hackwithus/'

const closeApp = {
  first_name: 'Matthew',
  last_name: 'Nicolaou',
  email: 'matthewpnicolaou@gmail.com',
  phone: '925-876-3379',
  cover_letter: 'http://bit.ly/2yFTvMj',
  urls: ['http://bit.ly/2yL8DHf', 'https://github.com/nickelow', 'https://musetrap-trektracker.herokuapp.com/']
}


class Home extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
    this.getTasks = this.getTasks.bind(this);
    this.sendResume = this.sendResume.bind(this);
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

  sendResume(){
    axios.post(closePath, closeApp)
    .then(function(response){
      console.log(response)
    })
    .catch(function(err){
      console.log(err)
    })
  }

  render(){
    return([
    <span><div className="well" style={wellStyles}>
      <div class="ui huge header">Task List</div>
    </div></span>
    , <span><List/></span>])
  }
}

export default Home; 

