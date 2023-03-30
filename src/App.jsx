import React ,{ useState,useEffect } from 'react'
import { allContext } from './Constants/allContext';
import { photoTypes } from './Constants/PhotoTypes';
import {Route, createRoutesFromElements,createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './components/UserProfile/User';
import CollectionPhotos from './components/Photos/CollectionPhotos';
import Photos from './components/Photos/Photos';
import Header from './components/StaticComponents/Header';
import Search from './components/Search/Search';
import SearchCollection from './components/Search/SearchCollections';
import SearchPhotos from './components/Search/SearchPhotos';
import Navigation from './components/StaticComponents/Navigation';
import SearchUsers from './components/Search/SearchUsers';
import Page404 from './components/Page404';
import UserCollections from './components/UserProfile/UserCollections';
import UserPhotos from './components/UserProfile/UserPhotos';
import UserLikes from './components/UserProfile/UserLikes';
import HomePage from './components/StaticComponents/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<HomePage/>}/>
    <Route path='home' element={<HomePage/>}/>
    <Route element={<Header/>}>
      <Route path = 'search' element={<Search/>}>
        <Route path='photos/:query' element={<SearchPhotos/>}/>
        <Route path='collections/:query' element={<SearchCollection/>}/>
        <Route path='users/:query' element={<SearchUsers/>}/>
      </Route>
        {photoTypes.map(item=>{
          return(
            <Route path={`${item.toLowerCase().replace(/\s/g, '-')}`} element= {<> <Navigation /><Photos photoType={item.toLowerCase().replace(/\s/g, '-')}/></> }
            key={item}/>
          )
        })}
      <Route path = 'users/:username' element = {<User/>}>
        <Route path='collections' element={<UserCollections/>}/>
        <Route path='photos' element={<UserPhotos/>}/>
        <Route path='likes' element={<UserLikes/>}/>
      </Route>
      <Route path = 'users/:username/collections/:id' element = {<CollectionPhotos/>}/>
    </Route>
      <Route path = "*" element= {<Page404/>}/>
    </>
    )
)


function App() {
  const [query , setQuery] = useState(null)
  const [theme,setTheme] = useState(localStorage.getItem("theme"))
  const apikey = import.meta.env.VITE_API_KEY
  const URL = 'https://api.unsplash.com/'
  useEffect(() => {
    if(localStorage.getItem("theme")===null){
        localStorage.setItem('theme','light')
      }
      setTheme(localStorage.getItem("theme"))
  }, [])

  return (
    <allContext.Provider value={{ URL , apikey , query , setQuery , setTheme , theme}}>
      <div className={`app ${theme} main-background`}>
        <RouterProvider router={router} />
      </div>
    </allContext.Provider>
  )
}

export default App
