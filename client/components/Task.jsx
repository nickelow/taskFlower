import React from 'react';
import reactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { Form, TextArea } from 'semantic-ui-react';
import DeleteButton from './DeleteButton.jsx';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
  'fontFamily': 'Helvetica, Arial, sans-serif'
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      originalIndex: props.findCard(props.id).index
    };
  },

  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveCard(droppedId, originalIndex);
    }
  }
};

const cardTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: overId } = props;

    if (draggedId !== overId) {
      const { index: overIndex } = props.findCard(overId);
      props.moveCard(draggedId, overIndex);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function collect2(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Card extends React.Component {
  render() {

    const { text, id, isDragging, connectDragSource, connectDropTarget, editMode, deleteCard, editCard } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div>
        <Form>
          <DeleteButton deleteCard={deleteCard} id={text} text={text}/>
          <TextArea autoHeight placeholder={text} text={text} id={id} style={{ minHeight: 100 }}  onKeyUp={editCard}/>
        </Form>
      </div>
    ));
  }
}

const x = DropTarget(ItemTypes.CARD, cardTarget, collect )(Card)
export default DragSource(ItemTypes.CARD, cardSource, collect2 )( x )