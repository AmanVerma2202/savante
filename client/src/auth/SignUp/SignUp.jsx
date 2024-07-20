import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Select, Option, Input, Textarea } from "@material-tailwind/react";
import SignupButton from "../../elements/SignupButton/SignupButton";
import Name from "../../components/Name/Name";
import "./signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    instagramHandle: '',
    contentNiche: '',
    followersCount: '',
    audienceDescription: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/influencer-page', { state: formData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md flex flex-col lg:flex-row">
        {/* Animation div - now first in order for small screens */}
        <div className="w-full lg:w-1/2 p-6 bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col justify-center items-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none order-first lg:order-last">
          <div className="text-center text-white">
            <div className="flex justify-center items-center">
              <dotlottie-player src="https://lottie.host/a157f8b6-8ec2-47b5-9a7e-49b120fcd2c3/06LXBha2hZ.json" background="transparent" speed="1" style={{ width: '250px', height: '250px' }} direction="1" playMode="normal" loop autoplay></dotlottie-player>
            </div>
            <div className="mt-6 px-4">
              <h2 className="text-2xl text-gray-300 font-semibold"><Name /></h2>
              <p className="text-sm mt-2">
                Empowering seamless influencer marketing with AI-driven solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Form div */}
        <div className="w-full lg:w-1/2 p-6 order-last lg:order-first">
          <h2 className="text-2xl text-gray-800 font-bold font-sans mb-6">Influencer Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Instagram Handle" name="instagramHandle" value={formData.instagramHandle} onChange={handleChange} />
            <Select label="Content Niche" value={formData.contentNiche} onChange={(value) => handleSelectChange('contentNiche', value)}>
              <Option>Fashion</Option>
              <Option>Beauty</Option>
              <Option>Health</Option>
              <Option>Technology</Option>
              <Option>Sports</Option>
            </Select>
            <Input label="Followers Count" name="followersCount" type="number" value={formData.followersCount} onChange={handleChange} />
            <Textarea label="Audience Description" name="audienceDescription" value={formData.audienceDescription} onChange={handleChange} />
            <SignupButton sign={"Sign Up"} />
          </form>
          <NavLink to='/sign-up/brand' className="mt-4 block text-center text-sm text-gray-600 underline">
            Are you a brand looking to connect with influencers?
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUp;