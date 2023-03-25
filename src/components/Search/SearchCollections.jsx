import {useParams} from "react-router-dom"
import { allContext } from "../../Constants/allContext"
import {useState,useContext} from "react"
import Collections from "../Collections/Collections"
import useFetch from "../UseFetch"
import ZeroResult from "../ZeroResult"

const SearchCollection = () => {
    const {query} = useParams()
    const {URL,apikey} = useContext(allContext)
    const url = `${URL}search/collections?client_id=${apikey}&query=${query}&per_page=30`
    const {data,loading,error} = useFetch(url)
    const [collections,setCollections] = useState(null)
    const [zeroResult , setZeroResult] = useState(false)

    if (data){
        if(data.results.length==0 && !collections){
            setZeroResult(true)
        }
        if(!collections){
            setCollections(data.results)
        }

    }
    document.title = `Collections | ${query}`

    return (
        <>
        {zeroResult && <ZeroResult/>}
        {collections && <Collections collectionsList={collections}/>}
        </>
    )
}
export default SearchCollection