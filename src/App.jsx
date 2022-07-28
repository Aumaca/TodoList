import React, { useState } from "react";

import FormTodo from "./components/FormTodo";
import Task from './components/Task';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState(0);

    function countCompletedTasks(list) {
        let counter = 0;
        list.forEach(task => {
            if (task.completed) {
                counter++;
            };
        });
        setCompletedTasks(counter);
    }

    function saveTask(new_task) {
        setTasks([new_task, ...tasks]);
    }

    function removeTask(task_id) {
        const updatedTasks = tasks.filter(task => task.id !== task_id);
        countCompletedTasks(updatedTasks);
        setTasks([...updatedTasks]);
    }

    function completeTask(task_id) {
        tasks.forEach(task => {
            if (task.id === task_id) {
                task.completed = !task.completed;
            }
        });

        setTasks([...tasks]);
        countCompletedTasks(tasks);
    }

    // if there is no completed tasks, the counter will not be displayed.
    let element;
    if (completedTasks > 0) {
        element = <h4 className="completed-tasks">Completed tasks: {completedTasks}</h4>;
    }

    return (
        <>
            <main>
                <div className="container">
                    <div className="title">
                        <h1>Todo List <i className="fa-solid fa-list-check"></i></h1>
                    </div>
                    <div className="todo-list-container">
                        <h5 className="title-form">What's your plan for today?</h5>
                        <FormTodo saveTask={saveTask} />
                        {tasks.map(task => (
                            <Task key={task.id} task={task} removeTask={removeTask} completeTask={completeTask} />
                        ))}
                    </div>
                    {element}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App