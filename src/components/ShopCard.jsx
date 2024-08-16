const ShopCard = ({ item }) => {
    const {
      img,
      title,
      brand_name,
      prevPrice,
      newPrice,
      category,
    } = item;
  
    return (
      <div>
        <div className="w-64 overflow-hidden bg-white hover:bg-gray-800 rounded-lg shadow-lg dark:bg-gray-800 group">
          <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                {brand_name}
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {title}
              </p>
            </div>
  
            <img
              className="object-cover w-full h-48 mt-2"
              src={img}
              alt="avatar"
            />
  
            <div className="flex items-center justify-between px-4 py-2 bg-orange-600">
              <h1 className="text-lg font-bold text-white">
                <span className="line-through mr-2">{prevPrice}</span>
                <span>{newPrice}</span>
              </h1>
  
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                {category}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShopCard;
  