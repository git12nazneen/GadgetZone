import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import { FaShopify } from "react-icons/fa";

const ElectricNeed = () => {
  return (
    <div className="bg-[#fafafa] py-20">
      <div className="max-w-6xl mx-auto  rounded-md py-10 px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="pt-12">
                <img
                  className="w-96 rounded-md gap-4 h-[80%] "
                  src={one}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-64 rounded-md gap-4 h-full"
                  src={two}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="px-6 lg:px-10 py-5 space-y-5">
              <p className="text-orange-600 text-sm font-bold mb-2">
                WHY CHOOSE US
              </p>
              <h2 className="text-5xl  mb-4">
                Find All Your <br /> Electronic Needs
              </h2>
              <h6 className="text-gray-700 text-sm pr-5">
                Uncover the reasons why choosing our store is the key to
                accessing cutting-edge electronics and a superior shopping
                experience.
              </h6>
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="py-4 flex-1">
                  <ul className="list-none space-y-2">
                    <li className="flex items-center">
                      <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                        <FaShopify />
                      </div>
                      <p className="text-sm">Affordable and competitive Pricing</p>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                        <FaShopify />
                      </div>
                      <p className="text-sm"> Positive customer reviews and ratings </p>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                        <FaShopify />
                      </div>
                      <p className="text-sm">Flexible payment options</p>
                    </li>
                  </ul>
                </div>
                <div className="py-4 flex-1">
                  <ul className="list-none space-y-3">
                    <li className="flex items-center ">
                      <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                        <FaShopify />
                      </div>
                      <p className="text-sm">User-friendly online platform</p>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                        <FaShopify />
                      </div>
                      <p className="text-sm">24/7 Expert customer service center</p>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                        <FaShopify />
                      </div>
                      <p className="text-sm">Fast and secure delivery</p>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="py-2 px-4 bg-orange-600 text-black rounded-md hover:bg-black  hover:text-white">
                Browse all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricNeed;
