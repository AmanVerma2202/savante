import { useLocation } from 'react-router-dom';

const InfluencerData = () => {
    const { state } = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-auto p-6 bg-indigo-100 rounded-lg shadow-md flex flex-col items-start">
        <h2 className="text-2xl text-gray-800 font-bold font-sans mb-6">Form Data</h2>
        <p className='text-gray-800'><strong>Name:</strong> {state.name}</p>
        <p className='text-gray-800'><strong>Instagram Handle:</strong> {state.instagramHandle}</p>
        <p className='text-gray-800'><strong>Content Niche:</strong> {state.contentNiche}</p>
        <p className='text-gray-800'><strong>Followers Count:</strong> {state.followersCount}</p>
        <p className='text-gray-800'><strong>Audience Description:</strong> {state.audienceDescription}</p>
      </div>
    </div>
  )
}

export default InfluencerData