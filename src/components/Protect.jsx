import { Navigate } from "react-router-dom";

const Protect = ({Child}) => {

    let verify = ()=>{
        if( localStorage.getItem("currentUser")==null )
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    return ( <>
    {
        verify() ? <Child/> : <Navigate to="/signin"/>
    }
    </>);
}
 
export default Protect;