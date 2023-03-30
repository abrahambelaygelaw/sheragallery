import React from 'react'

const ImageViewer = ({image,close}) => {
  return (
    <div className='image-viewer'  onClick={()=>{close(false)}}>
      <div className='image'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default ImageViewer
