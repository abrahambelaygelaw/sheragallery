import React,{useState,useEffect,useContext} from 'react'
import { Link,useParams } from 'react-router-dom'
import { allContext } from '../../Constants/allContext'
import Collections from '../Collections/Collections'
import ErrorPage from '../ErrorPage'
import useFetch from '../UseFetch'


const UserCollections = () => {
    const {username} = useParams()
    const [userCollections,setUserCollections] = useState(null)
    const {apikey,URL} = useContext(allContext)
    const url = `${URL}users/${username}/collections?&client_id=${apikey}`
    const {data,loading,error} = useFetch(url)


    if(data)
    { 

      if(!userCollections)
      setUserCollections(data)
    }

    document.title = `${username} | Collections`


  return (<>
    {error ?<ErrorPage/> : userCollections && <Collections collectionsList={userCollections}/>}
  </>
  )
}

export default UserCollections