import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Collections = ({collectionsList}) => {
  
  return (
    <div className='collections-container main-background'>
      {  collectionsList?.map(item=>
          <div className='collection' key={item.id}>
            <div className="cover-photo">
              <div className='profile'><img src= {item.cover_photo?.urls.small} alt="" /></div>
              <div className="side-photos">
                {
                  item.preview_photos && item.preview_photos.length>1 && item.preview_photos.slice(1,Math.min(4,item.preview_photos.length)).map(image=>
                    <div  key={image.id}><img src={image.urls.thumb}/></div>)
                  }
                </div>
            </div>
            <div className="collection-info">
              <Link to = {`/users/${item.user.username}/collections/${item.id}`}className='title'>{item.title}</Link>
              <small className='number-of-photos'>{item.total_photos} photos </small>
              <div><small>Created by </small> <Link to={`/users/${item.user.username}/collections`}  className='username'>{item.user.username}</Link></div>
            </div>

        </div>
        )
      }
    </div>
  )
}

export default Collections
