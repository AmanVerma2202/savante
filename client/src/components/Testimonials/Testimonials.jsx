// import LoginButton from "../../elements/LoginButton/LoginButton"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    name: `Samuel Carter`,
    image: `https://img.freepik.com/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg?size=626&ext=jpg&ga=GA1.1.1371546526.1721390026&semt=ais_user`,
    review: `This influencer matching website is a game-changer! It's incredibly user-friendly and efficiently connects brands with influencers in specific niches. The platform's search filters make it easy to find influencers who align perfectly with our brand's values and target audience. `,
  },
  {
    name: `Scarlett Dixon`,
    image: `https://img.freepik.com/premium-photo/portrait-business-woman-white-background_776674-557776.jpg?size=626&ext=jpg&ga=GA1.1.1371546526.1721390026&semt=ais_user`,
    review: `I've used several influencer platforms before, but none compare to this one. The interface is sleek and intuitive, making it a breeze to navigate and find influencers across various social media channels. `,
  },
  {
    name: `Serena Knight`,
    image: `https://img.freepik.com/premium-photo/closeup-photo-attractive-confident-business-lady-toothy-beaming-smile-good-mood-skilled-teacher-profession-occupation-wear-plaid-suit-jacket-white-shirt-isolated-grey-color-background_274222-32883.jpg?size=626&ext=jpg&ga=GA1.1.1371546526.1721390026&semt=ais_user`,
    review: `As a small business owner, finding influencers who genuinely resonate with our brand has always been a challenge. This website has been a game-changer for us. It's not just about finding influencers based on follower count; it's about finding those whose audience matches our target demographic. `,
  },
  {
    name: `Stuart Richardson`,
    image: `https://img.freepik.com/premium-photo/portrait-young-man-against-gray-background_1048944-27371860.jpg?size=626&ext=jpg&ga=GA1.1.1371546526.1721390026&semt=ais_user`,
    review: `I love how this influencer matching website takes a data-driven approach to influencer marketing. The comprehensive analytics provided allow us to assess an influencer's performance beyond just follower numbers. We can dive deep into engagement rates, audience demographics, and even sentiment analysis to ensure our partnerships are strategic and impactful. `,
  },
  {
    name: `Sylvia Morgan`,
    image: `https://img.freepik.com/premium-photo/portrait-confident-working-woman_719646-14555.jpg?size=626&ext=jpg&ga=GA1.1.1371546526.1721390026&semt=ais_user`,
    review: `This platform has completely transformed how we approach influencer collaborations. The quality of influencers we've discovered here is unmatched. We've been able to forge authentic partnerships that resonate with our audience, thanks to the platform's emphasis on influencer authenticity and credibility.`,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#c7d2fe] p-10 h-[750px]">
      <h1 className="ml-14 text-gray-800 sd:text-3xl lg:text-5xl text-4xl lg:mt-8 font-serif font-bold">
        Testimonials
      </h1>
      <div className="w-3/4 m-auto ">
        <div className="mt-10">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="bg-white h-[500px] rounded-xl">
                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={d.image} className="h-44 w-44 rounded-full" alt="image" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl text-gray-800 font-semibold">{d.name}</p>
                  <p className="text-sm text-gray-600">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
