import React,{useState,useContext} from "react"
import { useParams,Link, useNavigate } from "react-router-dom"
import { allContext } from "../../Constants/allContext"
import useFetch from "../UseFetch"
const SearchUsers = () =>{
    const {query} = useParams()
    const [usersList , setUserList] = useState(null)
    const {URL ,apikey} = useContext(allContext)
    const url = `${URL}search/users?client_id=${apikey}&query=${query}&per_page=30`
    const {data,loading,error} = useFetch(url)
    const navigate = useNavigate()
    if (data){

        if(!usersList){
            setUserList(data.results)
        }
    }
    document.title = `Users | ${query}`
    return (
        <>
        {usersList  && <div className="users">
            <div className="users-container">
            {  
                usersList?.map(user=>
                <div className="user " key={user.id}> 
                    <div className="user-container sub-background">
                        <div className="name main-background">
                                <div className="profile">
                                    <img src={user.profile_image.medium} alt="" />
                                </div>
                                <div className="names">
                                    <Link  to={`/users/${user.username}/collections`}  className="full-name">{user.first_name} {user.last_name}    </Link>
                                    <Link to={`/users/${user.username}/collections`} className="username">{user.username}</Link>
                                </div>
                            </div>
                        <div className="prev-photos">
                            {   
                                user.photos.map(photo=>
                                    <div className="prev-photo" key={photo.id}>
                                        <img src={photo.urls.thumb} alt="" />
                                    </div>)

                            }
                        </div>
                        <div className="view">
                            <button className="main-background" onClick={()=>{navigate(`/users/${user.username}/collections`)}}>View Profile</button>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
        </div>}
    </>
    )
}
export default SearchUsers