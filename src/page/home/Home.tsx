import Offerd from "../../components/ui/Offerd";
import ConvertionF from "../../components/ui/footer/ConvertionF";
import AccecsarisCarosal from "../accecsaris/AccecsarisCarosal";
import BestDealsCarousel from "../bestdeals/BestDealsCarousel";
import ShowBag from "../expesiveWare/ShowBag";
import NewArrivals from "../newarrivals/NewArrivals";
import AddSection from "./AddSection";
import AskQutions from "./AskQutions";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import MiddleBanner from "./MiddleBanner";
import MovingText from "./MovingText";

const Home = () => {
  return (
    <div className="bg-[#eeedeb]">
      <Banner></Banner>
      <Category></Category>
      <NewArrivals></NewArrivals>
      <AddSection></AddSection>
      <BestDealsCarousel></BestDealsCarousel>
      <MovingText></MovingText>
      <ShowBag></ShowBag>
      <AccecsarisCarosal></AccecsarisCarosal>
      <Offerd></Offerd>
      <AskQutions></AskQutions>
      <Contact></Contact>
      <MiddleBanner></MiddleBanner>
      <ConvertionF></ConvertionF>
    </div>
  );
};

export default Home;
