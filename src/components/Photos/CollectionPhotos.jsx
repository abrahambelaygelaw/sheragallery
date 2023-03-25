import React,{useContext,useState} from 'react'
import { useParams } from 'react-router-dom'
import MasonryComponent from './MasonryComponent'
import useFetch from '../UseFetch'
import { allContext } from '../../Constants/allContext'
import ErrorPage from '../ErrorPage'
import Loading from '../Loading'
import ZeroResult from '../ZeroResult'

const CollectionPhotos = () => {
  const {id} = useParams()
  const {URL , apikey} = useContext(allContext)
  const [zeroResult,setZeroResult] = useState(false)
  const [collectionPhotos,setCollectionPhotos] = useState(null)
  const url = `${URL}collections/${id}/photos?client_id=${apikey}`
  const {data,loading,error} = useFetch(url)

  if(data){
    if (!collectionPhotos && data.length==0){
      setZeroResult(true)
    }
    if(!collectionPhotos){
      setCollectionPhotos(data)
    }
  }

  return (
    <>
    {loading && <Loading/>}
    {zeroResult && <ZeroResult/>}
    {error ? <ErrorPage/> : <MasonryComponent photoList={collectionPhotos}/>}
    </>
  )
}

export default CollectionPhotos