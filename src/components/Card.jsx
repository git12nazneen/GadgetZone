
import { Link } from "react-router-dom";

const Card = ({ card }) => {

  const {
    name,
    image,
    description,
    company,
    capsuleInfo,
    price,
    originalPrice,
    discount,
    doses,
    _id,
    packet, 
  } = card;
 
  return (
    <div className="w-72 overflow-hidden bg-white hover:bg-gray-800 rounded-lg shadow-lg dark:bg-gray-800 group">
      <Link to={`/products/${_id}`}>
        <img
          className="object-cover hover:bg-black hover:opacity-35 object-center w-full h-56"
          src={image}
          alt="avatar"
        />
      </Link>
      <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 px-6 pt-4 pb-2 group-hover:text-white">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-white">
          {name}
        </h1>
        <div className="relative inline-block text-left">
          <h1
            className="px-2 text-gray-600 text-sm cursor-pointer group-hover:text-white"
          >
            Capsule- (20mg)
          </h1>
        
        </div>
      </div>
      <div className="px-6 py-2 group-hover:text-white">
        <h1 className="text-orange-600 dark:text-white group-hover:text-white">
          {description}
        </h1>
        <p className="py-2 text-gray-600 dark:text-gray-400 group-hover:text-white">
          {company}
        </p>
        <p className="text-gray-600 font-light text-sm group-hover:text-white">
          {capsuleInfo} || {packet} packet
        </p>
        <div className="flex gap-7 py-3">
          <h2 className="text-sm font-bold group-hover:text-white">
            ৳{originalPrice}
          </h2>
          <h2 className="text-sm font-light group-hover:text-white text-gray-500">
            ৳{price}
          </h2>
          <h2 className="text-sm font-light group-hover:text-white text-red-600">
            {discount}
          </h2>
        </div>

        {/* <button
          onClick={handleAddToCart}
          className={`text-center py-3 rounded-md mb-2 w-full ${
            packet > 0 ? "bg-[#0e7673] text-white" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={packet === 0}
        >
          {packet > 0 ? (isAddedToCart ? "View Cart" : "Add to cart") : "Stock Out"}
        </button> */}
      </div>
    </div>
  );
};

export default Card;