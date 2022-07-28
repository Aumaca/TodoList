import React from 'react';

function Task(props) {
    const { task, removeTask, completeTask } = props
    return (
        <div className='task-container' style={task.completed ? { borderLeft: '8px solid green' } : { borderLeft: '8px solid red' }}>
            <div className="task-title">
                <h4 style={task.completed ? { textDecoration: 'line-through' } : {}}>{task.title}</h4>
            </div>
            <div className="task-icons">
                <button className='task-icons-check-container' onClick={() => completeTask(task.id)}>
                    <i className="fa-solid fa-check"></i>
                </button>
                <button className='task-icons-trash-container' onClick={() => removeTask(task.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}

export default Task