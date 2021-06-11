import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import Button from './components/Button'

export class App extends Component {
    state = {
        data: [
            { name: 'Мария', surname: 'Войтко', phone: '+380969557970', id: 'asydd'}
      ],
      show: false
    }
  addTodo = (newTodo) => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    ...newTodo,
                    id: Date.now(),
                },
          ],
           show: false
        });
  };
  deleteTodo = (id) => {
      this.setState({
          data: this.state.data.filter((item) => item.id !== id),
      });
  };
  addFormClassName = () => {
    this.setState({ show: true });
  }
  closeForm = (e) => {
    this.setState({ show: false });
  }
  render() {
    const { data, show } = this.state;
      return (
        <div className='todoList'>
          <h1 className='title'>My contacts</h1>
          <List data={data} onDelete={this.deleteTodo} />
          <Button onClick = { this.addFormClassName } className = 'button__add' name='ADD' />
          <Form closeForm = { this.closeForm } status = { show } onAdd = { this.addTodo } />
        </div>
      )
    }
}

export default App;

