import './TaskList.css';
import {Task} from "../Task/Task";

export const TaskList = ({taskList, setTaskList, setIsTaskUpdated}) => {
    return (
        <div className='taskList'>
            {taskList.map(task => {
                return (
                    <Task setIsTaskUpdated={setIsTaskUpdated} setTaskList={setTaskList} key={task.id} task={task}></Task>
                );
            })

            }
        </div>
    );
}