import Offerd from "../../components/ui/Offerd";
import ConvertionF from "../../components/ui/footer/ConvertionF";
import AskQutions from "./AskQutions";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import MiddleBanner from "./MiddleBanner";
import MovingText from "./MovingText";
import Sestion from "./Sestion";

const Home = () => {
  return (
    <div className="bg-[#eeedeb]">
      <Banner></Banner>
      <Category></Category>
      <Sestion></Sestion>
      <MiddleBanner></MiddleBanner>
      <Contact></Contact>
      <AskQutions></AskQutions>
      <MovingText></MovingText>
      <Offerd></Offerd>
      <ConvertionF></ConvertionF>
    </div>
  );
};

export default Home;
