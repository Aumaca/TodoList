import React, { useState, useEffect } from "react";

import FormTodo from "./components/FormTodo";
import FormEditTodo from "./components/FormEditTodo";
import Task from './components/Task';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState(0);
    // To conditional rendering
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({});

    useEffect(() => {
        function countCompletedTasks() {
            let counter = 0;
            tasks.forEach(task => {
                if (task.completed) {
                    counter++;
                };
            });
            setCompletedTasks(counter);
        }
        countCompletedTasks();
    }, [tasks])

    function updateTask(task) {
        setCurrentTask({ ...task });
        setIsEditing(true);
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
                        {isEditing ? (
                            <FormEditTodo currentTask={currentTask} setCurrentTask={setCurrentTask} tasks={tasks} setTasks={setTasks} setIsEditing={setIsEditing} />
                        ) : (
                            <FormTodo tasks={tasks} setTasks={setTasks} />
                        )}
                        {tasks.map(task => (
                            <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} updateTask={updateTask} />
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