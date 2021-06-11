import React, { Component } from 'react'
import './List.css'
import ListItem from '../List-item'
export class List extends Component {
    render() {
        const { data, onDelete } = this.props;
        return (
        <div className='list'>
                {data.map((item) => {
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
}

export default List;
