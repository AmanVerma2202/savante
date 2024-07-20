

import SignupButton from '../../elements/SignupButton/SignupButton'
import { NavLink } from 'react-router-dom'

const WaitingFor = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[500px]  bg-cover bg-center">
  <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] opacity-50"></div>
  <div className="relative z-10 flex flex-col gap-10 items-center justify-center">
    <h1 className="text-gray-900 text-3xl lg:text-5xl font-serif font-bold mt-6 lg:mt-0">
      What are you waiting for?
    </h1>
    <NavLink to='/sign-up/influencer'>
      <SignupButton sign="Join Now" className=""/>
    </NavLink>
  </div>
</div>


  )
}

export default WaitingFor