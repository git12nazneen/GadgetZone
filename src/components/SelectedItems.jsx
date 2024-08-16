// import SelectedCard from "./SelectedCard";
import { IoCheckmarkSharp } from "react-icons/io5";
import GadgetSwiper from "../pages/GadgetSwiper";
const SelectedItems = () => {
  return (
    <div className="bg-[#f14902] py-20">
      <div className="max-w-5xl mx-auto bg-gray-100 rounded-md py-10 px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Text Section */}
          <div className="flex-1">
            <div className="px-6 lg:px-10 py-5 space-y-5">
              <p className="text-orange-600 text-sm font-bold mb-2">
                HIGHLIGHT ITEM
              </p>
              <h2 className="text-4xl  mb-4">
                Discover Our <br /> Selected Items
              </h2>
              <h6 className="text-gray-700 text-sm pr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </h6>
              <div className="py-4">
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <div className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                      <IoCheckmarkSharp />
                    </div>
                    Most liked
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                      <IoCheckmarkSharp />
                    </div>
                    Trending on the week
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                      <IoCheckmarkSharp />
                    </div>
                    High quality
                  </li>
                </ul>
              </div>
              <button className="py-2 px-4 bg-orange-600 text-black rounded-md hover:bg-black  hover:text-white">
                Browse all
              </button>
            </div>
          </div>
          {/* Card Section */}
          <div className="flex-1">
           <GadgetSwiper></GadgetSwiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedItems;
