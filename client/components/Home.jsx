import React from 'react';
import reactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import List from './List.jsx'

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
const listStyles = {"font-family": "Helvetica, Arial, sans-serif", "font-size": "13px", "color": "rgb(51, 51, 51)"}
const headerStyles ={'position': 'relative', 'left': '10%', 'top': '20%', 'width': '40%'}
const serverPath = 'http://cfassignment.herokuapp.com/matthewnicolaou/tasks'


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
     <span><List style={listStyles}/></span>])
  }
}

export default Home; 

