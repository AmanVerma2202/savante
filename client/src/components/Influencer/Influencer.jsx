// import SignUp from "../../auth/SignUp/SignUp"

import { NavLink } from "react-router-dom"
import SignupButton from "../../elements/SignupButton/SignupButton"



const Influencer = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] bg-[#fef08a]">
      <div className="w-full lg:w-1/3 lg:ml-20 lg:pl-10 p-6 lg:pt-14">
        <h1 className="text-gray-800 mt-6 lg:mt-20 text-3xl lg:text-5xl font-serif font-bold">
          Who is an Influencer?
        </h1>
        <p className="text-gray-700 mt-6 mb-6 text-base lg:text-lg">
          An influencer is an individual who has the power to affect the purchasing decisions of others because of their
          authority, knowledge, position, or relationship with their audience. Influencers typically have a strong presence
          on social media platforms and are recognized for their ability to create engaging content that resonates with
          their followers.
        </p>
        <NavLink to='/sign-up/influencer' > 
          <SignupButton sign="Sign Me Up" />
        </NavLink>
      </div>
      <div className="w-full lg:w-2/3 flex justify-center items-center p-6 lg:p-0">
        <img className="w-full lg:w-3/5 rounded-2xl" src="https://img.freepik.com/premium-photo/happy-people-happy-group-smiling-face-happy_941600-12334.jpg?w=900" />
      </div>
    </div>
  )
}

export default Influencer