import Name from "../Name/Name"
import SocialMedia from "../SocialMedia/SocialMedia"


const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-4">
        {/* Social media section */}
        <div className="py-6 border-b border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">Get connected with us on social networks:</p>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="text-center md:text-left">
              <h6 className="flex items-center justify-center md:justify-start font-semibold mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-3 text-gray-800"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
                <Name className="text-gray-800 text-3xl font-bold" />
              </h6>
              <p className="text-sm">
                Savante is an innovative Influencer AI Tech Company poised to revolutionize the Influencer Marketing Industry by addressing its two most significant challenges: Influencer Discovery and Return on Investment (ROI).
              </p>
            </div>

            {/* Know More About Us */}
            <div className="text-center md:text-left">
              <h6 className="font-semibold uppercase mb-4 text-gray-800">Know More About Us</h6>
              <ul className="space-y-2">
                {["The Team", "Our Solutions", "Our Campaigns", "Brands", "Influencer"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-800">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="text-center md:text-left">
              <h6 className="font-semibold uppercase mb-4 text-gray-800">Quick links</h6>
              <ul className="space-y-2">
                {["Contact us", "Careers", "Privacy Policy", "Help", "Blogs"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-800">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h6 className="font-semibold uppercase mb-4 text-gray-800">Contact</h6>
              <ul className="space-y-2">
                <li className="flex items-center justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  ABC, XYZ, India
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  abc@example.xyz
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  + 91-XXXXXXXXXX
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 text-center py-4">
        <p className="text-gray-800">
          © 2023 Copyright: <a href="https://tw-elements.com/" className="font-semibold">Savante</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer