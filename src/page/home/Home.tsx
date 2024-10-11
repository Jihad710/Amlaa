import AccecsarisCarosal from "../accecsaris/AccecsarisCarosal";
import BestDealsCarousel from "../bestdeals/BestDealsCarousel";
import ShowBag from "../expesiveWare/ShowBag";
import NewArrivals from "../newarrivals/NewArrivals";
import AskQutions from "./AskQutions";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import MiddleBanner from "./MiddleBanner";
import Post from "./Post";
import SecondBanner from "./SecondBanner";

const Home = () => {
  return (
    <div className="bg-[#eeedeb]">
      <Banner></Banner>
      <Category></Category>
      <NewArrivals></NewArrivals>

      
      <SecondBanner></SecondBanner>
      <BestDealsCarousel></BestDealsCarousel>
      <ShowBag></ShowBag>
      <AccecsarisCarosal></AccecsarisCarosal>
      <AskQutions></AskQutions>
      <Contact></Contact>
      <MiddleBanner></MiddleBanner>
      <Post></Post>
    </div>
  );
};

export default Home;
