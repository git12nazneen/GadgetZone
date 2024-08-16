const SelectedCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-8">
      {/* Example Card */}
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            NIKE AIR
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </p>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src="https://images.pexels.com/photos/5849392/pexels-photo-5849392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="NIKE AIR"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-orange-600">
          <h1 className="text-lg font-bold text-white">$129</h1>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
          </button>
        </div>
      </div>
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            NIKE AIR
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </p>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="NIKE AIR"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-orange-600">
          <h1 className="text-lg font-bold text-white">$129</h1>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
