import './Task.css';
import {useState} from "react";

export const Task = ({task, setTaskList, setIsTaskUpdated}) => {
    const [editTaskValue, setEditTaskValue] = useState('');
    const [isEditingTask, setIsEditingTask] = useState(false);

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
        setIsEditingTask(false);
    };

    function handleEditOnClick () {
        setIsEditingTask(true);
    }

    function handleDelete () {
        handleDeleteTask(task.id);
    }
    function handleEditOnBlur () {
        handleEditTask(task.id);
    }

    if (isEditingTask) {
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