import React ,{useContext}from 'react'
import { Outlet, useNavigate  } from 'react-router-dom'
import { allContext } from '../../Constants/allContext'

const Header = () => {
  const {query,setQuery,theme,setTheme} = useContext(allContext)
  const navigate = useNavigate()
  const toggleTheme = () =>{
    const curr = localStorage.getItem("theme")
    localStorage.setItem("theme",curr==="light"?"dark":"light")
    setTheme(localStorage.getItem("theme"))
  }
  document.body.className = theme
  const toggleSearch = ()=>{
    if (query){
      navigate(`/search/photos/${query.toLowerCase().replace(/\s/g, '-')}`)
    }
  }

  return (
    <>
      <div className='header sub-background'>
        <div className="logo-search" >
          <div className='logo'>
            <img src="../../assets/logo_vector.jpg" alt="" onClick={()=>{navigate('/home')}}/>
          </div>
          <div className='search-bar'>
            <input className='main-background' type="text" placeholder='Search ...'
          onChange={(e)=>{
            setQuery(e.target.value)}}/>
            <i className="fa-solid fa-magnifying-glass main-background" onClick={()=>{toggleSearch()}}></i>
            <button className='main-background' onClick={()=>{toggleTheme()}}>{theme=="light"?"Dark":"Light"} Mode</button>
          </div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Header
