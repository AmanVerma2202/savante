import { NavLink } from "react-router-dom"
import SignupButton from "../../elements/SignupButton/SignupButton"
import "./FrontPage.css"

const FrontPage = () => {
  return (
  
    // <div className=" flex flex-col lg:flex-row sm:mt-8 h-auto lg:h-[750px] overflow-hidden perspective">

    //   <div className=" w-full lg:w-1/2 lg:ml-14 lg:pl-44 p-6 lg:p-0 flex gap-7 flex-col justify-center items-start ">
    //     <h2 className="text-gray-800 text-2xl font-serif font-extrabold lg:text-5xl">Empowering seamless influencer marketing with AI-driven solutions.</h2>
    //     <NavLink to='/sign-up/influencer'>
    //       <SignupButton sign="Get Started" className=""/>
    //     </NavLink>
    //   </div>
      
    //   <div className=" w-full lg:w-1/3 flex justify-center items-center p-6 lg:p-0 ">
    //     <iframe src="https://lottie.host/embed/91580a0e-d74e-4f48-9733-db81f8c320f2/tC8gAwXpSh.json" style={{width:'400px',height:'400px',borderRadius:'10px'}}></iframe>
    //   </div>
    // </div>


    // <div className="front-page-container">
    //   <div className="animated-background"></div>
    //   <div className="content-wrapper flex flex-col lg:flex-row sm:mt-8 h-auto lg:h-[750px] overflow-hidden perspective">
    //     <div className="w-full lg:w-1/2 lg:ml-14 lg:pl-44 p-6 lg:p-0 flex gap-7 flex-col justify-center items-start">
    //       <h2 className="text-gray-800 text-2xl font-serif font-extrabold lg:text-5xl">Empowering seamless influencer marketing with AI-driven solutions.</h2>
    //       <NavLink to='/sign-up/influencer'>
    //         <SignupButton sign="Get Started" className=""/>
    //       </NavLink>
    //     </div>
        
    //     <div className="w-full lg:w-1/3 flex justify-center items-center p-6 lg:p-0">
    //       <iframe src="https://lottie.host/embed/91580a0e-d74e-4f48-9733-db81f8c320f2/tC8gAwXpSh.json" style={{width:'400px',height:'400px',borderRadius:'10px'}}></iframe>
    //     </div>
    //   </div>
    // </div>


    <div className="front-page-container">
      <div className="animated-background"></div>
      <div className="floating-objects">
        <div className="object object-1"></div>
        <div className="object object-2"></div>
        <div className="object object-3"></div>
        <div className="object object-4"></div>
      </div>
      <div className=" flex flex-col lg:flex-row sm:mt-8 h-auto lg:h-[750px] overflow-hidden perspective">
        <div className="w-full lg:w-1/2 lg:ml-14 lg:pl-44 lg:p-0 flex gap-7 flex-col justify-center items-start">
          <h2 className="text-gray-800 text-2xl font-serif font-extrabold lg:text-5xl">Empowering seamless influencer marketing with AI-driven solutions.</h2>
          <NavLink to='/sign-up/influencer'>
            <SignupButton sign="Get Started" className=""/>
          </NavLink>
        </div>
        
        <div className="w-full lg:w-1/3 flex justify-center items-center  lg:p-0">
          <iframe src="https://lottie.host/embed/91580a0e-d74e-4f48-9733-db81f8c320f2/tC8gAwXpSh.json" style={{width:'400px',height:'400px',borderRadius:'10px'}}></iframe>
        </div>
      </div>
    </div>
    
  )
}

export default FrontPage