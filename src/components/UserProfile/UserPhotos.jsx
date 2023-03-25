import { useParams } from "react-router-dom"
import { allContext } from "../../Constants/allContext"
import MasonryComponent from "../Photos/MasonryComponent"
import useFetch from "../UseFetch"
import { useState,useContext } from "react"
import ErrorPage from "../ErrorPage"

const UserPhotos = () =>{
    const {username} = useParams()
    const {URL , apikey} = useContext(allContext)
    const url = `${URL}users/${username}/photos?client_id=${apikey}`
    const {data,loading,error} = useFetch(url)
    const [userPhotos,setUserPhotos] = useState()
    if (data){
        if(userPhotos==null){
            setUserPhotos(data)
        }
    }
    document.title = `${username} | Photos`
    return (
        <>
        {error && <ErrorPage/>}
       { userPhotos && <MasonryComponent photoList={userPhotos}/>}
        </>
        )
}

export default UserPhotos