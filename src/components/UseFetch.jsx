import React,{useState,useEffect , useContext} from 'react'
import axios from "axios"


const useFetch = (url) => {
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(null)
    useEffect(()=>{
        fetch(url)
        },[url])


    const fetch = async (url)=>{
        try{
            setLoading(true)
            const response = await axios.get(url)
            setData(response.data)
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }
        
    return {data,loading,error,fetch}
}

export default useFetch
