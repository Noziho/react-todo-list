import '../../assets/styles/App.css';
import {Taskbar} from "../Taskbar/Taskbar";
import {useState} from "react";
import {TaskList} from "../TaskList/TaskList";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [isTaskUpdated, setIsTaskUpdated] = useState(false);

    if (isTaskUpdated) {
        setTaskList(taskList);
        setIsTaskUpdated(false);
        console.log([...taskList])
    }
    const addTask = (inputData) => {
        let taskListCopy = [...taskList, {id: taskList.length ,taskName: inputData, validation: false}];
        setTaskList(taskListCopy);
    }
    return (
        <div className="container">
            <Taskbar addTask={addTask}></Taskbar>
            <TaskList setIsTaskUpdated={setIsTaskUpdated} setTaskList={setTaskList} taskList={taskList}></TaskList>
        </div>
    );
}

export default App;
