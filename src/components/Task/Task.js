import './Task.css';
import {useState} from "react";

export const Task = ({task, setTaskList, setIsTaskUpdated, setProgressValue, progressValue, setIsUpdateProgressValue}) => {
    const [editTaskValue, setEditTaskValue] = useState('');
    const [isEditingTask, setIsEditingTask] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleDeleteTask = (taskId) => {
        setTaskList((prevList) => prevList.filter((task) => task.id !== taskId))
        if (task.complete === true) {
            setProgressValue(progressValue - 1);
        }
        setIsTaskUpdated(true);
    }
    const handleEditTaskName = (taskId) => {
        setTaskList((prevList) =>
            prevList.map((task) =>
                task.id === taskId ? { ...task, taskName: editTaskValue } : task
            )
        );
        setIsTaskUpdated(true);
        setIsEditingTask(false);
    };

    const handleEditTaskComplete = (status) => {
        setTaskList((prevList) =>
            prevList.map((task) =>
                task.complete !== status ? { ...task, complete: status } : task
            )
        );
        setIsTaskUpdated(true);
        setIsEditingTask(false);
    }

    function handleEditOnClick () {
        setIsEditingTask(true);
    }

    function handleDelete () {
        handleDeleteTask(task.id);
    }
    function handleEditOnBlur () {
        handleEditTaskName(task.id);
    }

    const handleCheck = (e) => {
        setIsChecked(e.target.checked);

        if (e.target.checked) {
            setProgressValue(progressValue + 1);
            setIsUpdateProgressValue(true);
            handleEditTaskComplete(true);
        }
        else {
            setProgressValue(progressValue - 1);
            setIsUpdateProgressValue(true);
            handleEditTaskComplete(false);

        }

    }

    if (isEditingTask) {
        return (
            <input type="text" value={editTaskValue} placeholder={task.taskName} onChange={e => {setEditTaskValue(e.target.value)}} onBlur={handleEditOnBlur}/>
        );
    } else {
        return (
            <div className='task'>
                <input type="checkbox" name="isChecked" onClick={handleCheck}/>
                <p className={isChecked ? "taskChecked" : "notCheck"}>{task.taskName}</p>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEditOnClick}>Edit</button>
            </div>
        );
    }
}