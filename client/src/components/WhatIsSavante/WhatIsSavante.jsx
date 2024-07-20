import SocialMedia from "../SocialMedia/SocialMedia"


const WhatIsSavante = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[750px] bg-cover bg-center">
      
      <div className="w-full lg:w-2/3 flex justify-center items-center p-6 lg:p-0">
        <img
          className="w-full lg:w-3/5 rounded-2xl lg:mr-16"
          src="https://sensibles.ai/wp-content/uploads/2023/12/2007b4be08027384cfae2d1e3f285829__1_-removebg-preview.png"
          alt="Happy people"
        />
      </div>
      

      <div className="w-full lg:w-1/3 lg:mr-14 lg:pr-10 p-6 lg:p-0 flex flex-col justify-center items-center bg-white bg-opacity-75">
        <h1 className="text-gray-800 text-3xl lg:text-5xl font-serif font-bold mt-6 lg:mt-0">
          What is Savante?
        </h1>
        <p className="text-gray-600 mt-6 text-base lg:text-lg">
          Savante is an upcoming Influencer AI Tech Company that aims to revolutionize the influencer marketing industry by addressing two of its biggest challenges: influencer discovery and return on investment (ROI). Utilizing advanced AI technologies, Savante streamlines the process of finding the most suitable influencers for brands, ensuring optimal matches based on various metrics and audience insights. Additionally, Savante provides comprehensive tools to track and measure the effectiveness of influencer campaigns, allowing brands to accurately assess their ROI.
        </p>
        <div className="mr-5 mt-7">
          <SocialMedia/>
        </div>
        
      </div>
    </div>
  )
}

export default WhatIsSavante