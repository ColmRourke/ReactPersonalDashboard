import React, {Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return{
        //         textDecoration: 'none'
        //     }
            
        // }
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    //this markComplete method isn't part of Component so it doesn't know what 'this' is
    //we bind the data so it knows what this is. refer to the checkbox input
    // alternatively we can remove the bind(this) and change the markComplete method so that
    // is looks like printMarkComplete = (e) => { //whatever }
    printMarkComplete(e){
        console.log(this.props)
    }

    /*
    Note:
    markComplete: I want to change the state of the ticked item so that state.complete is true if ticked
    This means climbing the ladder up to App.js where the state is declared.
    So in Todos.js we have to add a prop called markComplete when refering to this class
    When we click this input, it will look for this prop, in todos it will run it.
    Note we are passing id up! 
     */

    render(){
        /* 
        A little hard to understand but read the printMarkComplete comment first.
        Instead of constantly writing this.props.todo.someAulAttribute, we can destructer it
        Below, this.props.todo.id and this.props.todo.title are now named id and title
        Note I left in this.props.todo.title but I could change this to just title
        */
       const { id, title } = this.props.todo;
        return(
            <div style={ this.getStyle() }>
                <p>
                <input type="checkbox" onChange={this.printMarkComplete.bind(this)} /> {' '}
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                {this.props.todo.title}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 9px',
    cursor: 'pointer',
    float:'right'
}

export default TodoItem