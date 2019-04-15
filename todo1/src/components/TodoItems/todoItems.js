import React from 'react';
import './todoItems.css'

const TodoItems = (props) => {
    const {items, deleteItem} = props;
    let length = items.length;
    const listItems = length ? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span className="plan">{item.plan}</span>
                    <span className="date">{item.date}</span>
                    <span className="action icon" onClick={()=> deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
     ) : (
        <p>There is no item to show</p>
    )
    return (
        <div className="ListItems">
            <div>
                <span className="plan title">Plan</span>
                <span className="date title">Time(hours)</span>
                <span className="action title">Action</span>
            </div>
            {listItems}
        </div>
    )
}

export default TodoItems;