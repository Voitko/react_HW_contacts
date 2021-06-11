import React, { Component } from 'react';
import './Form.css'
import Button from '../Button'
export class Form extends Component {
    state = {
        newTodo: {
            name: '',
            surname: '',
            phone: ''
        }
    };
    onChange = (e) => {
        this.setState({
            newTodo: {
                ...this.state.newTodo,
                [e.target.name]: e.target.value,
            },
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.newTodo);
        this.resetForm();
    }
    resetForm = () => {
        this.setState({
            newTodo: {
                ...this.state.newTodo,
                name: '',
                surname: '',
                phone: ''
            }
        });
    }
    render() {
        const { name, surname, phone } = this.state.newTodo
        const { status } = this.props;
        return (
            <form onSubmit={this.onSubmit} className = {status ? 'form show' : 'form'}>
                <input
                    onChange = { this.onChange }
                    type = "text"
                    placeholder='Введите имя'
                    required
                    name='name'
                    value= { name }
                    
                />
                <input
                    onChange = { this.onChange }
                    type = "text"
                    placeholder='Введите фамилию'
                    required
                    name='surname'
                    value=  { surname }
                />
                <input
                    onChange = { this.onChange }
                    type="tel" 
                    placeholder='Введите номер телефона'
                    required
                    name='phone'
                    value=  { phone }
                />
                <div className='buttons__group'>
                    <Button type='submit' className='button__save' name='save' />
                    <Button type='reset'
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.closeForm();
                                this.resetForm();
                            }}
                            className='button__cancle'
                            name='cancle' />
                </div>
            </form>
        )
    }
}

export default Form;
