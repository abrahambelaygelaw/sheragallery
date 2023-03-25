import React from 'react'
import UserCollections from './UserCollections'
import UserProfile from './UserProfile'
import { Outlet, useParams } from 'react-router-dom'
import Header from '../StaticComponents/Header'

const User = () => {
  const {username} = useParams()

  return (
    <div className='user-page'>
        <UserProfile username = {username}/>
        <Outlet/>
    </div>
  )
}

export default User