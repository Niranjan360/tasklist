import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    let[taskList , setTaskList] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:4000/tasks")
        .then((res)=>{ return(res.json())})
        .then((data)=>{
            console.log(data);
            setTaskList(data);
        })    
    } , [])

    return (
    <div className="home-comp">
        <h1> Task List </h1>
        <table border="3px">
            <thead>
                <tr>
                    <th>Sl</th>
                    <th>Task name</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Action</th>
                </tr>
            </thead>
            {taskList &&    <tbody>
                                {
                                    taskList.map((task,i,a)=>{
                                        return( <tr>
                                                    <td>{i+1}</td>
                                                    <td>{task.taskname}</td>
                                                    <td>{task.startDate}</td>
                                                    <td>{task.endDate}</td>
                                                    <td><Link to={`/details/${task.id}`}>View</Link></td>
                                                </tr> )
                                    })
                                }
                            </tbody>}
        </table>
    </div>);


}
 
export default Home;