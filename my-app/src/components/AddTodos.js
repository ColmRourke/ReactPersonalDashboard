import React, { Component } from 'react'

export class AddTodos extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        //title is whatever the input field is 
        this.setState({title: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();//  prevent submitting to file
        this.props.addTodo(this.state.title); //pass up
        this.setState({ title:'' })//clear fields
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input type='text' name='title' placeholder="Add Todo ..." style={{flex:'10', padding:'5px'}} 
                value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex: 1}} />
            </form>
        )
    }
}

export default 	AddTodos
