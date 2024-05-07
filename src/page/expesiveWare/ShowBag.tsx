const myobj = [
  {
    images: [
      "https://desiminimals.com/cdn/shop/files/DSC_2192.jpg?v=1713083304&width=750",

      "https://desiminimals.com/cdn/shop/files/DSC_2192.jpg?v=1713083304&width=750",

      "https://desiminimals.com/cdn/shop/files/DSC_2192.jpg?v=1713083304&width=750",
      "https://desiminimals.com/cdn/shop/files/DSC_2192.jpg?v=1713083304&width=750",
      "https://desiminimals.com/cdn/shop/files/DSC_2192.jpg?v=1713083304&width=750",
      "https://desiminimals.com/cdn/shop/files/DSC_2192.jpg?v=1713083304&width=750",
      "https://desiminimals.com/cdn/shop/files/DSC_2192.jpg?v=1713083304&width=750",
    ],
    title: "Moss — Heavy Duty Tote Bag",
    price: "1,150.00",
    textProperty: "Tax included.",
    productDetails:
      "Large and thick tote in canvas, made in 100% cotton with printed branding on the front. Long handles that go around the front of the bag. Unlined with a magnet closure.",
    productInfo: [
      { Height: "15 inches", Width: "21 inches", Handle: "29 inches" },
    ],
    capacity: "15L",
  },
  // Add more products as needed
];

const ShowBag = () => {
  return (
    <div className="px-10 mb-52 mt-32">
      <div className="w-full">
        {myobj.map((value, index) => (
          <div key={index} className="flex gap-5 ">
            <div className="w-4/12 h-[480px] flex gap-3">
              <div className="h-full overflow-y-auto">
                <div className=" h-full  flex flex-col ">
                  {value.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`product-${index}-${idx}`}
                      className=" w-20 h-32 object-cover cursor-pointer my-1"
                    />
                  ))}
                </div>
              </div>
              <div className=" h-full ">
                <img
                  src={value.images[0]}
                  alt={`product-${index}-big`}
                  className="h-[480px] w-full object-cover"
                />
              </div>
            </div>
            <div className="w-8/12 p-5 pt-10">
              <h1 className="font-bold text-4xl">{value.title}</h1>
              <div className="py-5 font-semibold">
                <p>${value.price}</p>
                <p className="text-sm">{value.textProperty}</p>
              </div>
              <p className="text-sm font-semibold pb-5">
                {value.productDetails}
              </p>
              <div>
                <p className="font-bold text-lg">Dimensions -</p>
                {value.productInfo.map((i, idx) => (
                  <div key={idx}>
                    <p>
                      Width <span className="font-semibold">{i.Width}</span>
                    </p>
                    <p>
                      Height <span className="font-semibold">{i.Height}</span>
                    </p>
                    <p>
                      Handle <span className="font-semibold">{i.Handle}</span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="py-5">
                Capacity -{" "}
                <span className="font-semibold">{value.capacity}</span>
              </p>
              <button className="mt-2 uppercase w-full py-2 rounded-lg border-2 border-gray-900">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBag;
