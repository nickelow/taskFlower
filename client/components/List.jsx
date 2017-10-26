import React from 'react';
import reactDOM from 'react-dom';
import Card from './Task.jsx';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper';
import TaskButton from './TaskButton.jsx';
import ButtonBar from './ButtonBar.jsx';
import axios from 'axios';

const serverPath = 'http://cfassignment.herokuapp.com/matthewnicolaou/tasks'

const cardStyle = {
	'width': '80%'
}

const listStyle = {
	'marginRight': '5%',
	'marginLeft': '5%',
	'marginTop': '0%'
}



class List extends React.Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.findCard = this.findCard.bind(this);
    this.editMode = this.editMode.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.getCards = this.getCards.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.state = {
      cards: [{
        id: 0,
        text: 'Write a cool JS library'
      }, {
        id: 1,
        text: 'Make it generic enough'
      }, {
        id: 2,
        text: 'Write README'
      }, {
        id: 3,
        text: 'Create some examples'
      }, {
        id: 4,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
      }, {
        id: 5,
        text: '???'
      }, {
        id: 6,
        text: 'PROFIT'
      }],

      modified: false,
      target: null
    };
  }

  findCard(id) {
    const { cards } = this.state;
    const card = cards.filter(c => c.id === id)[0];

    return {
      card,
      index: cards.indexOf(card)
    };
  }

	moveCard(dragIndex, hoverIndex) {
		const { cards } = this.state
		const dragCard = cards[dragIndex]

		this.setState(
			update(this.state, {
				cards: {
					$splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
				},
			}),
		)
	}

	saveCards(){
		var taskList = this.state.cards;
		axios.post(serverPath, {tasks: taskList})
		.then(function(response){
			console.log('sent to server')
		})
		.catch(function(error){
			console.log('error', error)
		})
	}

  getCards(){
    axios.get(serverPath)
    .then(function(response){
      console.log(response.data)
      this.setState({
      	cards: response.data
      })
    })
    .catch(function(err){
      console.log(err)
    })
  }

	addCard(){
		this.setState(
			this.state.cards.splice(0, 0, 
				{id: this.state.cards.length + 1,
				 text: 'New Task',
				 key: this.state.cards.length + 1,
				 index: this.state.cards.length + 1})
			)
		this.setState({
					modified: true})
	}

  deleteCard(index){
  	var cardId = index.target.id
  	var newList = this.state.cards.filter(function(card){
      	return card.id.toString() !== cardId
      })
  	console.log(newList)
  	this.setState({
      cards: newList
  	})
  }


	editMode(){
		console.log('Matt is a baller', event.target)
		this.setState({
			modified: true
		})
	}

  render() {
    const { cards } = this.state;
    return ([
    	<div style={listStyle}>
    	<div><ButtonBar addCard={this.addCard} saveCards={this.saveCards}/></div>,
      <div style={cardStyle}>
        {this.state.cards.map((card, i) => {
          return (
            <Card key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  moveCard={this.moveCard} 
                  findCard={this.findCard}
                  editMode={this.editMode}
                  deleteCard={this.deleteCard}
                   />     
          );
        })}
      </div>
      </div>
    ]);
  }
}

export default DragDropContext(HTML5Backend)(List)

