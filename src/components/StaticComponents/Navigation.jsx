import React from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { photoTypes } from '../../Constants/PhotoTypes'


const Navigation = () => {
  return (
    <div className='navigation main-background '>
      <div className="nav-bar main-background">

          {photoTypes.map((item)=>{
            return(
              <NavLink to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
              key={item}>{item}</NavLink>
              )
            })}
            </div>
      
    </div>
  )
}

export default Navigation
