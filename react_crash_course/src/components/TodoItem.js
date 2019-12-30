import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
    /*    if (this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
      };
    } else {
      return {
        textDecoration: 'none'
      };
    } */
  };

  render() {
    const { id, title } = this.props.todo; //destructuring the prop to have the id and title available
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle ={
  background: '#ff0000',
  color: '#fff', 
  border: 'none', 
  padding: '5px 9px', 
  borderRadius: '50%', 
  cursor: 'pointer', 
  float: 'right'
}

/*const itemStyle = {
  backgroundColor: '#f4f4f4'
};*/

export default TodoItem;