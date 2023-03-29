import './TaskList.css';
import {Task} from "../Task/Task";
import {useState} from "react";

export const TaskList = ({taskList, setTaskList, setIsTaskUpdated}) => {
    const [progressValue, setProgressValue] = useState(0);
    const [isUpdateProgressValue, setIsUpdateProgressValue] = useState(false);

    if (isUpdateProgressValue) {
        setProgressValue(progressValue);
        setIsUpdateProgressValue(false);
    }

    return (
        <div className='taskList'>
            {taskList.map(task => {
                return (
                    <Task
                        setProgressValue={setProgressValue}
                        setIsUpdateProgressValue={setIsUpdateProgressValue}
                          setIsTaskUpdated={setIsTaskUpdated}
                          setTaskList={setTaskList}
                          key={task.id} task={task}
                          taskList={taskList}
                          progressValue={progressValue}>

                    </Task>
                );
            })

            }
            <progress max={taskList.length} value={progressValue}></progress>
        </div>
    );
}