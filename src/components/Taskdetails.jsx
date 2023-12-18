import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Taskdetails = () => {

    let[task , setTask ] = useState(null);
    let {tid} = useParams();
    let redirect = useNavigate();

    let[pop , setPop ] = useState(false);


    useEffect(()=>{
        fetch("http://localhost:4000/tasks/"+tid)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setTask(data)
        })
    } , [])

    let handleDelete = ()=>{

        let config = {
                        method : "DELETE"
                    }

        if(window.confirm("Are you sure ? to delete"))
        {
            fetch("http://localhost:4000/tasks/"+tid ,  config)
            .then(()=>{
                redirect("/");
            })
        }
    }

    return ( 
        <div className="task-details">
            <h1>Task Details</h1>
            <hr />
            {task && <div>
                        <h1>Task name : {task.taskname} </h1>
                        <h2>Start date : {task.startDate} </h2>
                        <h2>End date : {task.endDate}</h2>
                        <h2>Summary : {task.summary}</h2>

                        <button onClick={handleDelete}> delete </button>

                        <button onClick={()=>{setPop(true)}}> update </button>

                    </div>}

            {pop && 
                    <div className="update-form">
                        <div>
                            <h1>Add new task</h1>

                            <form>
                                <input type="text" placeholder="Taskname" />
                                <input type="date" />
                                <input type="date" />
                                <textarea cols="50" rows="3" placeholder="summary" ></textarea>

                                <input type="submit" value="Add task"  />
                            </form>
                        </div>
                        <button onClick={()=>{setPop(false)}}>close</button>
                    </div>}
                
        </div>
     );
}
export default Taskdetails;