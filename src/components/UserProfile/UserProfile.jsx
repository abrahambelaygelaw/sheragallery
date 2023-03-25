import React , {useState, useContext,useEffect}from 'react'
import { NavLink } from 'react-router-dom'
import { allContext } from '../../Constants/allContext'
import useFetch from '../UseFetch'

const UserProfile = ({username}) => {
  const {apikey,URL} = useContext(allContext)
  const [userData,setUserData]=useState(null)
  const url = `${URL}users/${username}?&client_id=${apikey}`
  const {data , loading , error} = useFetch(url)
  if(data){
    if (userData==null){
      setUserData(data)
    }
  }
  return (
    <>
    {loading && <loading/>}
    {userData &&
    <>
      <div className='user-profile main-background' >
        <div className="user-profile-center">
          <img src={userData.profile_image.large} alt="" className="user-profile-image"/>
          <div className="user-details">
            <h1>{userData.name}</h1>
            <span>@{userData.username }</span> 
            {userData.location?<><i className="fa-solid fa-location-dot"></i> 
            <span className='location'>{ userData.location}</span></>:"" }               
            <em><p className='bio'>{userData.bio}</p></em>
            <p className='num-of-collections'> {userData.total_collections} collections</p>
            <p className='likes'> {userData.total_likes} likes</p>
            </div>
        </div>
      </div>
        <div className='user-navigations main-background border-bottom'>
          <NavLink to="collections">Collections</NavLink>
          <NavLink to="likes">Likes</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </div>
    </>}
    </>
    
  )
}

export default UserProfile