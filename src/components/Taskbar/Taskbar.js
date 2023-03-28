import './Taskbar.css';
import {useState} from "react";

export const Taskbar = ({addTask}) => {
    const [inputData, setInputData] = useState('');

    function handleSubmit (e) {
        addTask(inputData);
        setInputData('');
    }

    return (
        <div>
            <input type="text" value={inputData} onChange={e=> setInputData(e.target.value) }/>
            <input type="submit" onClick={handleSubmit}/>
        </div>
    )
    
     
}