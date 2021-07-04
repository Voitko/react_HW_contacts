import React from 'react'
import './List.css'
import ListItem from '../List-item'

function List( props ) {
    const { data, onDelete } = props;
    return (
    <div className='list'>
            { data.map(( item ) => {
                return (
                    <ListItem
                        key = { item.id }
                        item = { item }
                        onDelete = { onDelete }
                    />
                );
            })}
        </div>
    );
}

export default List;
