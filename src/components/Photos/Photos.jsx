import React,{useContext,useEffect, useState} from 'react'
import { allContext } from '../../Constants/allContext'
import useFetch from '../UseFetch'
import MasonryComponent from './MasonryComponent'
import ErrorPage from '../ErrorPage'

const Photos = ({photoType}) => {
    const [listPhotos , setListPhotos] = useState([])
    const [page , setPage] = useState(1)
    const [scrollHeight , setScrollHeight] = useState(null)
    const {URL , apikey} = useContext(allContext)
    const url = `${URL}search/photos?client_id=${apikey}&query=${photoType}&per_page=30&page=${page}`
    
    const {data,loading, error,fetch} = useFetch(url)
    
    useEffect(() => {
      setPage(1)
      setListPhotos([])
    }, [photoType])

    useEffect(()=>{
      if(data){
        setListPhotos([...listPhotos,...data.results])
      }
    },[data])

    
    const handleScroll = ()=>{
      setScrollHeight(window.scrollY)
      if(window.innerHeight + window.scrollY>=document.body.scrollHeight){
        setPage(prev=>prev+1)
      }
    }
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll)
      return ()=>removeEventListener("scroll",handleScroll)
    },[page])
    document.title = `Photos | ${photoType}`
  return (
      <>
        {error ? <ErrorPage/>:<MasonryComponent photoList={listPhotos}/>}
      </>
  )
}

export default Photos
