import {Link,useNavigate} from 'react-router-dom'
const ErrorPage = () =>{
    const navigate = useNavigate()
    return (
        <div className="error main-background">
           <h1> Something went wrong! Try again later.</h1>
            <Link to= "/home" className="return-home">Go To Home</Link>
        </div>
    )
}
export default ErrorPage