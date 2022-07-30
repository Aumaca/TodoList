import React, { useState, useRef, useEffect } from 'react';

function FormTodo(props) {

    const { tasks, setTasks } = props;
    const initialTask = { id: 0, title: '', completed: false };
    const [task, setTask] = useState(initialTask);
    const [characters, setCharacters] = useState(0);
    const input_element = useRef(null);

    useEffect(() => {
        if (task) {
            input_element.current.focus();
        }
    });

    function handleChange(e) {
        setTask({
            id: Math.round(Math.random() * 100000),
            title: e.target.value,
            completed: false,
        });
        setCharacters(parseInt(e.target.value.length));
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (task.title.length > 0 && task.title.length < 76) {
            setTasks([task, ...tasks]);
        };

        setTask(initialTask);
        setCharacters(0);
    };

    // If nothing is being write, the characters counter will not be displayed.
    let characters_element;
    if (task.title.length > 0) {
        characters_element = (
            <p className='form-characters' style={characters > 75 ? { color: 'red' } : { color: 'green' }}>
                {characters} characters
            </p>
        )
    };

    return (
        <>
            <form className="form-container" onSubmit={(e) => handleSubmit(e)} >
                <input
                    className='form-input'
                    type="text"
                    placeholder='e.g study for the tomorrow test'
                    value={task.title}
                    onChange={(e) => handleChange(e)}
                    ref={input_element}
                />
                <button className='form-button'>+</button>
            </form>
            {characters_element}
        </>
    )

}

export default FormTodo