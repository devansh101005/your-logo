import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'
import { createBrowserRouter} from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import User from './components/User/User'
import {githubInfoLoader} from './components/Github/Github'

// const router =createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       elemet:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]

  
//   }
// ])
//ek to ye upar wala tarika hai roue karne ka ek easy tarika aur hai neeche 

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path ='about' element={<About/>}/>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path= 'github' 
      element ={<Github/>}></Route>
      </Route>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
