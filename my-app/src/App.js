import React, { useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import Button from './components/Button'

function App() {
  const [data, setData] = useState( [ { name: 'Мария', surname: 'Войтко', phone: '+380969557970', id: 'asydd' } ] )
  const [show, setShow] = useState( { show: false } )
  function addTodo(newContact) {
    setData([
        ...data,
        {
            ...newContact,
            id: Date.now(),
        }
    ]);
    setShow({
        show: false
    })
  }
  function deleteTodo(id) {
      let newData = data.filter(( item ) => item.id !== id )
      setData(newData);
  }
  function addFormClassName() {
    setShow({ show: true });
  }
  function closeForm() {
    setShow({ show: false });
  }
  return (
        <div className='todoList'>
          <h1 className='title'>My contacts</h1>
          <List data = { data } onDelete={ deleteTodo } />
          <Button onClick = { addFormClassName } className = 'button__add' name='ADD' />
          <Form closeForm = { closeForm } status = { show } onAdd = { addTodo } />
        </div>
      )
}

export default App;

