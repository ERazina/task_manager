import React from 'react';
import './TaskListComponent.scss';

function TaskListComponent() {
    return (
        <div className="list">
            <h2>List of tasks:</h2>
            <ul className="items">
                <li>new task</li>
            </ul>
        </div>
    );
}


export default TaskListComponent;