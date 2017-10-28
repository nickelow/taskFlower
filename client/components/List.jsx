import React from 'react';
import reactDOM from 'react-dom';
import Card from './Task.jsx';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper';
import TaskButton from './TaskButton.jsx';
import DeleteButton from './DeleteButton.jsx';
import ButtonBar from './ButtonBar.jsx';
import Alert from './Alert.jsx';
import axios from 'axios';

const serverPath = 'http://cfassignment.herokuapp.com/matthewnicolaou/tasks'

const cardStyle = {
	'width': '80%'
}

const listStyle = {
	'marginRight': '5%',
	'marginLeft': '5%',
	'marginTop': '5%',
	backgroundColor: '#f2f9fd',
	'position': 'static'
}



class List extends React.Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.findCard = this.findCard.bind(this);
    this.editMode = this.editMode.bind(this);
    this.editCard = this.editCard.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.getCards = this.getCards.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
    this.state = {
      cards: [],
      modified: false,
      saved: false,
      target: null,
      ids: 0
    };
  }

  componentDidMount(){
  	this.getCards()
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
		this.setState({
      modified: true
    })
	}

	saveCards(){
		var context = this;
		var taskList = this.state.cards;
		axios.post(serverPath, {tasks: taskList})
		.then(function(response){
			console.log('sent to server')
			context.setState({
				modified: false,
				saved: true
			})
		})
		.catch(function(error){
			console.log('error', error)
      this.setState({
        saved: false
      })
		})
	}

  getCards(){
  	var data = [];
  	var context = this;
    axios.get(serverPath)
    .then(function(response){
      console.log(response.data)
      data = response.data.tasks
      context.setState({
    	  cards: data
      })
    })
    .catch(function(err){
      console.log(err)
      this.setState({
        saved: false
      })
    })
  }

	addCard(){
		this.setState(
			this.state.cards.splice(0, 0, 
				{id: this.state.cards.length, 
				 text: 'New Task'})
			)
		this.setState({
					modified: true
				})
	}

  deleteCard(index){
  	var cardId = index.target.id
  	var newList = this.state.cards.filter(function(card){
      	return card.text !== cardId
      })
  	this.setState({
      cards: newList,
      modified: true
  	})
  }


	editMode(event){
		console.log('Matt is a baller', event.target)
		this.setState({
			modified: true
		})
	}

	editCard(e){
		console.log(e.target.value)
		var cardId = e.target.id
		var cardList = this.state.cards
		console.log(cardId);
		cardList[cardId] = {text:e.target.value, id: cardId}
		console.log(cardList)
    this.state.cards[cardId].text = e.target.value
    this.setState({
    	modified: true
    })
	}

	dismissAlert(){
		this.setState({
			saved: false
		})
	}

  render() {
    const { cards } = this.state;
    return ([
    	<div style={listStyle}>
    	<div><ButtonBar addCard={this.addCard} modified={this.state.modified} saveCards={this.saveCards}/></div>
      <div style={cardStyle}>
      {this.state.saved === true ? <Alert dismissAlert={this.dismissAlert}/> : <div></div>}
        {cards.map((card, i) => {
          return (
            <Card key={i}
	            index={i}
	            id={i}
	            text={card.text}
	            moveCard={this.moveCard} 
	            findCard={this.findCard}
	            editMode={this.editMode}
	            deleteCard={this.deleteCard}
	            editCard ={this.editCard}
	           />     
          );
        })}
      </div>
      </div>
    ]);
  }
}

export default DragDropContext(HTML5Backend)(List)

