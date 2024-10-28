import AccecsarisCarosal from "../accecsaris/AccecsarisCarosal";
import BestDealsCarousel from "../bestdeals/BestDealsCarousel";
import HighlightsProducts from "../expesiveWare/HighlightsProducts";
import NewArrivals from "../newarrivals/NewArrivals";
import AskQutions from "./AskQutions";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import Post from "./Post";
import SecondBanner from "./SecondBanner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Category></Category>
      <NewArrivals></NewArrivals>

      <SecondBanner></SecondBanner>
      <BestDealsCarousel></BestDealsCarousel>
      <HighlightsProducts></HighlightsProducts>
      <AccecsarisCarosal></AccecsarisCarosal>
      <AskQutions></AskQutions>
      <Contact></Contact>
      {/* <MiddleBanner></MiddleBanner> */}
      <Post></Post>
    </div>
  );
};

export default Home;
