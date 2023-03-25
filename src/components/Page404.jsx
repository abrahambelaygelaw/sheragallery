import { Link } from "react-router-dom"

const Page404 = () => {
    return ( 
        <div className="error main-background">
            <h1> Something went wrong! Try again later.</h1>
            <Link to= "/home" className="return-home main-background">Back Home</Link>
        </div>
    )
}
export default Page404