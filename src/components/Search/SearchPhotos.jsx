import Photos from "../Photos/Photos"
import { useParams } from "react-router-dom"

const SearchPhotos = () =>{
    const {query} = useParams()
    return (
        <Photos photoType={query}/>
    )
}
export default SearchPhotos