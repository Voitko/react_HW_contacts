import React, { useState } from 'react';
import './Form.css'
import Button from '../Button'

function Form( props ) {
    const [newContact, setNewContact] = useState( { name: '', surname: '', phone: '' }  );
    const { name, surname, phone } = newContact;
    const { status, closeForm } = props;
    function onChange(e) {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value
        });
    }
    function onSubmit(e) {
        e.preventDefault();
        props.onAdd(newContact);
        resetForm();
    }
    function resetForm() {
        setNewContact({
            ...newContact,
            name: '',
            surname: '',
            phone: ''
        });
    }
     return (
        <form onSubmit={ onSubmit } className = {status.show ? 'form show' : 'form'}>
            <input
                onChange = { onChange }
                type = "text"
                placeholder='Введите имя'
                required
                name='name'
                value= { name }
                
            />
            <input
                onChange = { onChange }
                type = "text"
                placeholder='Введите фамилию'
                required
                name='surname'
                value=  { surname }
            />
            <input
                onChange = { onChange }
                type="tel" 
                placeholder='Введите номер телефона'
                required
                name='phone'
                value=  { phone }
            />
            <div className='buttons__group'>
                <Button type='submit' className='button__save' name='save' />
                <Button type='reset'
                        onClick={ (e) => {
                            e.preventDefault();
                            closeForm();
                            resetForm();
                        }}
                        className='button__cancle'
                        name='cancle' />
            </div>
        </form>
    )
}

export default Form;
