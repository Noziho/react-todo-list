import './Task.css';
import {useState} from "react";

export const Task = ({task, setTaskList, setIsTaskUpdated}) => {
    const [editTaskValue, setEditTaskValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleDeleteTask = (taskId) => {
        setTaskList((prevList) => prevList.filter((task) => task.id !== taskId))
        setIsTaskUpdated(true);
    }
    const handleEditTask = (taskId) => {
        setTaskList((prevList) =>
            prevList.map((task) =>
                task.id === taskId ? { ...task, taskName: editTaskValue } : task
            )
        );
        setIsTaskUpdated(true);
        setIsEditing(false);
    };

    function handleEditOnClick () {
        setIsEditing(true);
    }

    function handleDelete () {
        handleDeleteTask(task.id);
    }
    function handleEditOnBlur () {
        handleEditTask(task.id);
    }

    if (isEditing) {
        return (
            <input type="text" value={editTaskValue} placeholder={task.taskName} onChange={e => {setEditTaskValue(e.target.value)}} onBlur={handleEditOnBlur}/>
        );
    } else {
        return (
            <div className='task'>
                <p>{task.taskName}</p>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEditOnClick}>Edit</button>
            </div>
        );
    }
}