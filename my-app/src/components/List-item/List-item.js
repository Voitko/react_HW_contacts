import React, { Component } from 'react'
import './List-item.css'
export class Listitem extends Component {
    onDeleteBtnClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.item.id);
    };
    render() {
        const { item } = this.props;
        return (
            <div className = 'list-item-main'>
                <li className = 'list-item' >{ item.name }</li>
                <li className = 'list-item' >{ item.surname }</li>
                <li className = 'list-item' >{ item.phone }</li>
                <li onClick = { this.onDeleteBtnClick } className = 'list-item '><span className = 'close'></span></li>
            </div>
        ) 
    }
}

export default Listitem;
