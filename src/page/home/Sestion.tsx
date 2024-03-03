import imag1 from "../../assets/DSC_2139.webp";
import imag2 from "../../assets/DSC_5063 (1).webp";
const data = [
  {
    imag: imag1,
    setion: "Spring / Summer",
    title:
      "Breathable, lightweight fabrics and neutral hues. Explore clean and versatile pieces.",
  },
  {
    imag: imag2,
    setion: "Autumn / Winter",
    title:
      "Cozy layers, structured silhouettes, and quality knitwear for comfort.",
  },
];
const Sestion = () => {
  return (
    <div>
      <div className="flex justify-between ">
        {data.map((item, index) => (
          <div key={index}>
            <img
              className="size-[570px] rounded-ss-[800px] rounded-se-[800px]"
              src={item.imag}
              alt=""
            />
            <h1 className="text-center text-2xl pt-6">{item.setion}</h1>
            <p className="py-8 text-center">{item.title}</p>
            <div className="w-full flex justify-center">
              <button className="w-1/3 mx-auto tracking-widest  border-2 border-purple-400 px-5 py-3 rounded-full ">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sestion;
