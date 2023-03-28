import './Task.css';

export const Task = ({task, setTaskList, setIsTaskUpdated}) => {

    const handleDeleteTask = (taskId) => {
        setTaskList((prevList) => prevList.filter((task) => task.id !== taskId))
        setIsTaskUpdated(true);
    }
    function handleDelete () {
        handleDeleteTask(task.id);
    }



    return (
      <div className='task'>
          <p>{task.taskName}</p>
          <button onClick={handleDelete}>Delete</button>
      </div>
    );
}