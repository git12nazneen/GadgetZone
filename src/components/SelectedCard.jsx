
const SelectedCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Example Card */}
              <div className="w-full overflow-hidden bg-white hover:bg-gray-800 rounded-lg shadow-lg dark:bg-gray-800 group">
                <img
                  className="object-cover hover:bg-black hover:opacity-35 object-center w-full h-56"
                  src="https://via.placeholder.com/150"
                  alt="Gadget Pro Max"
                />
                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 px-6 pt-4 pb-2 group-hover:text-white">
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-white">
                    Gadget Pro Max
                  </h1>
                  <div className="relative inline-block text-left">
                    <h1 className="px-2 text-gray-600 text-sm cursor-pointer group-hover:text-white">
                      Capsule- (20mg)
                    </h1>
                  </div>
                </div>
                <div className="px-6 py-2 group-hover:text-white">
                  <h1 className="text-orange-600 dark:text-white group-hover:text-white">
                    High-performance gadget 
                  </h1>
                  <p className="py-2 text-gray-600 dark:text-gray-400 group-hover:text-white">
                    GadgetCo
                  </p>
                  <p className="text-gray-600 font-light text-sm group-hover:text-white">
                    1 packet
                  </p>
                  <div className="flex gap-7 py-3">
                    <h2 className="text-sm font-bold group-hover:text-white">
                      ৳1500
                    </h2>
                  
                  </div>
                </div>
              </div>
              {/* Duplicate Card for Demonstration */}
              <div className="w-full overflow-hidden bg-white hover:bg-gray-800 rounded-lg shadow-lg dark:bg-gray-800 group">
                <img
                  className="object-cover hover:bg-black hover:opacity-35 object-center w-full h-56"
                  src="https://via.placeholder.com/150"
                  alt="Gadget Pro Max"
                />
                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 px-6 pt-4 pb-2 group-hover:text-white">
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-white">
                    Gadget Pro Max
                  </h1>
                  <div className="relative inline-block text-left">
                    <h1 className="px-2 text-gray-600 text-sm cursor-pointer group-hover:text-white">
                      Capsule- (20mg)
                    </h1>
                  </div>
                </div>
                <div className="px-6 py-2 group-hover:text-white">
                  <h1 className="text-orange-600 dark:text-white group-hover:text-white">
                    High-performance gadget 
                  </h1>
                  <p className="py-2 text-gray-600 dark:text-gray-400 group-hover:text-white">
                    GadgetCo
                  </p>
                  <p className="text-gray-600 font-light text-sm group-hover:text-white">
                    1 packet
                  </p>
                  <div className="flex gap-7 py-3">
                    <h2 className="text-sm font-bold group-hover:text-white">
                      ৳1500
                    </h2>
                   
                  </div>
                </div>
              </div>
            </div>
  );
};

export default SelectedCard;
