import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import MasonryComponent from '../Photos/MasonryComponent';
import Header from './Header';
import Navigation from './Navigation';
import { allContext } from '../../Constants/allContext';
import useFetch from '../UseFetch';
const HomePage = () => {
  const navigate = useNavigate();
  const [listPhotos,setListPhotos] = useState([])
  const [scrollHeight , setScrollHeight] = useState(null)
  const [page,setPage] = useState(1)
  
  const {URL , apikey} = useContext(allContext)
  const url = `${URL}search/photos?client_id=${apikey}&query=random&per_page=30&page=${page}&order_by=popular`
    
  const {data,loading, error,fetch} = useFetch(url)
  


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
  document.title = `Shera | Home`
  return (
    <>
    <Header/>
    <Navigation/>
    <div className='landing-page'>
        <div className='landing-bg'>
            <div className='landing-contents'>
              <div className="container">
                <h1>Shera Gallery</h1>
                <span>Explore High Resolution Images</span>
              </div>
            </div>
        </div>
    </div>
    <MasonryComponent photoList={listPhotos}/>
    </>
  )
}

export default HomePage