import { NavLink, Outlet, useParams } from 'react-router-dom'


const Search = () => {
    const {query} = useParams()
    
  return (
    <>

    <div className='search-buttons main-background' >
      <NavLink to={`photos/${query}`}>Photos</NavLink>
      <NavLink to={`users/${query}`}>Users</NavLink>
      <NavLink to={`collections/${query}`}>Collections</NavLink>
    </div>
    <Outlet/>
    </>
  )
}

export default Search
