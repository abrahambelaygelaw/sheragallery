import React ,{useContext,useEffect}from 'react'
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
  
  useEffect(() => {
    window.addEventListener("keyup",handleEnter);
    return ()=>removeEventListener("keyup",handleEnter)
  })
  const handleEnter = (e) =>{
    if(e.key=="Enter"){
      toggleSearch()
    }
  }
  const toggleSearch = () =>{
    if (query){
      navigate(`/search/photos/${query.toLowerCase().replace(/\s/g, '-')}`)
    }
  }
  

  return (
    <>
      <div className='header sub-background'>
        <div className="logo-search" >
          <div className='logo'>
            <img src="https://i.pinimg.com/564x/6b/f7/b9/6bf7b9879abf86c73603922e3000b79d.jpg" alt="" onClick={()=>{navigate('/home')}}/>
          </div>
          <div className='search-bar'>
            <input className='main-background' type="text" placeholder='Search'
          onChange={(e)=>{
            setQuery(prev=>e.target.value)}}/>
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
