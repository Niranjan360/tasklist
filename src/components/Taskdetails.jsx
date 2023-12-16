import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Taskdetails = () => {

    let[task , setTask ] = useState(null);

    let {tid} = useParams();

    useEffect(()=>{
        fetch("http://localhost:4000/tasks/"+tid)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setTask(data)
        })
    } , [])

    return ( 
        <div className="task-details">
            <h1>Task Details</h1>
            <hr />
            {task && <div>
                        <h1>Task name : {task.taskname} </h1>
                        <h2>Start date : {task.startDate} </h2>
                        <h2>End date : {task.endDate}</h2>
                        <h2>Summary : {task.summary}</h2>
                    </div>}
        </div>
     );
}
export default Taskdetails;