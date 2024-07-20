import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import BrandsWork from './components/BrandsWorkWith/BrandsWork.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import HowItWork from './components/HowItWork/HowItWork.jsx'
import Influencer from './components/Influencer/Influencer.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import WhatIsSavante from './components/WhatIsSavante/WhatIsSavante.jsx'
import SignUp from './auth/SignUp/SignUp.jsx'
import FrontPage from './components/frontPage/FrontPage.jsx'
import WaitingFor from './components/WaitingFor/WaitingFor.jsx'
import BrandSignUp from './auth/BrandSignUp/BrandSignUp.jsx'
import BrandData from './components/data/BrandData.jsx'
import InfluencerData from './components/data/InfluencerData.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<><FrontPage/><WhatIsSavante/><Influencer/><HowItWork/><Testimonials/><BrandsWork/><WaitingFor/></>
        
      },
      {
        path:'/our-work',
        element:<><FrontPage/><WhatIsSavante/><Influencer/><HowItWork/><Testimonials/><BrandsWork/><WaitingFor/></>
        
      },
      {
        path:'/Brands&Agencies',
        element:<><FrontPage/><WhatIsSavante/><Influencer/><HowItWork/><Testimonials/><BrandsWork/><WaitingFor/></>
      },
      {
        path:'/about',
        element:<><FrontPage/><WhatIsSavante/><Influencer/><HowItWork/><Testimonials/><BrandsWork/><WaitingFor/></>
      },
      {
        path:'/contact-us',
        element:<><FrontPage/><WhatIsSavante/><Influencer/><HowItWork/><Testimonials/><BrandsWork/><WaitingFor/></>
      },
      {
        path:'/sign-up/influencer',
        element:<SignUp/>,
      },
      {
        path:'/sign-up/brand',
        element:<BrandSignUp/>,
      },
      {
        path:'/brand-page',
        element:<BrandData/>,
      },
      {
        path:'/influencer-page',
        element:<InfluencerData/>,
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
    
  </React.StrictMode>,
)
