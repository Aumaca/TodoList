import React, { useState, useEffect, useRef } from 'react';

function FormEditTodo(props) {

    const { currentTask, setCurrentTask, tasks, setTasks, setIsEditing } = props;
    const [characters, setCharacters] = useState(0);
    const input_element = useRef(null);

    function handleChange(e) {
        setCurrentTask({ ...currentTask, title: e.target.value });
    };

    useEffect(() => {
        setCharacters(parseInt(currentTask.title.length));
    }, [currentTask.title]);

    useEffect(() => {
        if (currentTask) {
            input_element.current.focus();
        };
    }, [currentTask]);

    function handleSubmit(e) {
        e.preventDefault();

        if (currentTask.title.length > 0 && currentTask.title.length < 76) {
            const updateItem = tasks.map((task) => {
                return task.id === currentTask.id ? currentTask : task;
            });
            setTasks([...updateItem]);
            setCurrentTask({});
            setIsEditing(false);
        };
    };

    // If nothing is being write, the characters counter will not be displayed.
    let characters_element;
    if (currentTask.title.length > 0) {
        characters_element = (
            <p className='form-characters' style={characters > 75 ? { color: 'red' } : { color: 'green' }}>
                {characters} characters
            </p>
        );
    };

    return (
        <>
            <form className="form-container" onSubmit={(e) => handleSubmit(e)} >
                <input
                    className='form-input'
                    type="text"
                    placeholder='e.g study for the tomorrow test'
                    value={currentTask.title}
                    onChange={(e) => handleChange(e)}
                    ref={input_element}
                />
                <button className='form-button'><i className="fa-solid fa-pen"></i></button>
            </form>
            {characters_element}
        </>
    )

}

export default FormEditTodo