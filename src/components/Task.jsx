import React from 'react';

function Task(props) {
    const { task, tasks, setTasks, updateTask } = props;

    //Find the task_id in the list and remove from.
    function removeTask(task_id) {
        const updatedTasks = tasks.filter(each_task => each_task.id !== task.id);
        setTasks([...updatedTasks]);
    };

    //Find the task_id and change the 'completed' property.
    function completeTask(task_id) {
        tasks.forEach(each_task => {
            if (each_task.id === task.id) {
                each_task.completed = !task.completed;
            };
        });

        setTasks([...tasks]);
    };

    return (
        <div className='task-container' style={task.completed ? { borderLeft: '8px solid green' } : { borderLeft: '8px solid red' }}>
            <div className="task-title">
                <h4 style={task.completed ? { textDecoration: 'line-through' } : {}}>{task.title}</h4>
            </div>
            <div className="task-icons">
                <button className='task-icons-check-container' onClick={() => completeTask()}>
                    <i className="fa-solid fa-check"></i>
                </button>
                <button className='task-icons-pen-container' onClick={() => updateTask(task)}>
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button className='task-icons-trash-container' onClick={() => removeTask()}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}

export default Task