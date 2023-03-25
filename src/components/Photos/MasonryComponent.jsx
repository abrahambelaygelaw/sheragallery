import { Link } from 'react-router-dom'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const MasonryComponent = ({photoList}) => {
  return (
    <div className='photos main-background'>
        <ResponsiveMasonry  style={{ width:'90%', margin:'auto'/* ,marginTop:'120px' */}}
            columnsCountBreakPoints={{ 400: 2, 750: 3,1100:4,1450:5,1800:5,2000:6,2200:8,2500:9}}>
            <Masonry gutter='10px'>
             { photoList?.map(item=>
            <div className='photo-container' key={item.id}>
              <img src={item.urls.small}
                  alt='' 
                  className='item' 
                  />
               <div className="layer"></div>
              <div className='username_'>
                <img src={item.user.profile_image.small} alt="" />
                <Link
                  to={`/users/${item.user.username}/collections`} 
                  className='username'>{item.user.username}</Link>          
              </div>
            </div>) }
            </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}

export default MasonryComponent