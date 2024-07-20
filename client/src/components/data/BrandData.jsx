import { useLocation } from 'react-router-dom';

const BrandData = () => {
    const { state } = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-auto p-6 bg-indigo-100 rounded-lg shadow-md flex flex-col items-start">
        <h2 className="text-2xl text-gray-800 font-bold font-sans mb-6">Brand Data</h2>
        <p className='text-gray-800'><strong>Brand Name:</strong> {state.brandName}</p>
        <p className='text-gray-800'><strong>Website URL:</strong> {state.websiteUrl}</p>
        <p className='text-gray-800'><strong>Niche/Industry:</strong> {state.niche}</p>
        <p className='text-gray-800'><strong>Company Size:</strong> {state.companySize}</p>
        <p className='text-gray-800'><strong>Instagram Handle:</strong> {state.instagramHandle}</p>
        <p className='text-gray-800'><strong>Brand Description:</strong> {state.brandDescription}</p>
      </div>
    </div>
  )
}

export default BrandData