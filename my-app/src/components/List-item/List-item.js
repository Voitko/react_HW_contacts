import React from 'react'
import './List-item.css'

function Listitem( props ) {
    const { item } = props;
    function onDeleteBtnClick(e) {
        e.stopPropagation();
        props.onDelete(props.item.id);
    };
     return (
        <div className = 'list-item-main'>
            <li className = 'list-item' >{ item.name }</li>
            <li className = 'list-item' >{ item.surname }</li>
            <li className = 'list-item' >{ item.phone }</li>
            <li onClick = { onDeleteBtnClick } className = 'list-item '><span className = 'close'></span></li>
        </div>
    ) 
}
export default Listitem;