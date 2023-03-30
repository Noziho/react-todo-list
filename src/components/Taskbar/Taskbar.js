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
            <input type="text" className={'taskBar'} value={inputData} onChange={e=> setInputData(e.target.value) }/>
            <input type="submit" className={'submitButton'} onClick={handleSubmit}/>
        </div>
    )
    
     
}