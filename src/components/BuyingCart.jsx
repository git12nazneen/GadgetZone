import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";

import ShopCard from "./ShopCard";
import useMenu from "../hooks/useMenu";

const ITEMS_PER_PAGE = 3;

const BuyingCart = () => {
  const categories = [
    "media",
    "drones",
    "entertainment",
    "security",
    "computing",
    "home",
  ];
  const { category } = useParams();
  const initialIndex = category ? categories.indexOf(category) : 0; // Default to media category if no category in URL
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting
  const [searchTerm, setSearchTerm] = useState(""); // State for search

  const { isLoading, error, products } = useMenu();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  const getPaginatedProducts = (category) => {
    // Filter by category
    let filteredProducts = products.filter(
      (item) =>
        item.category.trim().toLowerCase() === category.trim().toLowerCase()
    );

    // Apply search filter (by brand name)
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((item) =>
        item.brand_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting by newPrice
    filteredProducts.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.newPrice - b.newPrice;
      } else {
        return b.newPrice - a.newPrice;
      }
    });

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = (direction, category) => {
    setCurrentPage((prevPage) => {
      const totalItems = products.filter(
        (item) => item.category === category && (!searchTerm || item.brand_name?.toLowerCase().includes(searchTerm.toLowerCase()))
      ).length;
      if (direction === "next") {
        if (prevPage * ITEMS_PER_PAGE < totalItems) {
          return prevPage + 1;
        }
        return prevPage;
      } else if (direction === "prev") {
        return Math.max(prevPage - 1, 1);
      }
      return prevPage;
    });
  };

  return (
    <div className="bg-slate-100 py-10">
      <div className="lg:max-w-4xl mx-auto my-8 text-center">
        <p className="text-sm text-orange-600 font-bold">LATEST PRODUCT</p>
        <h1 className="text-4xl font-bold">Explore Our New Arrival</h1>
      </div>

      <div className="max-w-5xl mx-auto my-20">
        {/* Search and Sort Controls */}
        <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Search by brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border rounded bg-white"
          >
            <option value="asc">Sort by Price: Low to High</option>
            <option value="desc">Sort by Price: High to Low</option>
          </select>
        </div>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            setCurrentPage(1);
          }}
        >
          <TabList className="flex space-x-4">
            <h2 className="pt-2 text-orange-600 font-bold">Recommended Category : </h2>
            <Tab className="px-4 py-2 bg-white text-black rounded-md border hover:bg-blue-600">Media</Tab>
            <Tab className="px-4 py-2 bg-white text-black rounded-md border hover:bg-green-600">Technology</Tab>
            <Tab className="px-4 py-2 bg-white text-black rounded-md border hover:bg-red-600">Drones</Tab>
            <Tab className="px-4 py-2 bg-white text-black rounded-md border hover:bg-yellow-600">Security</Tab>
            <Tab className="px-4 py-2 bg-white text-black rounded-md border hover:bg-purple-600">Home</Tab>
            <Tab className="px-4 py-2 bg-white text-black rounded-md border hover:bg-teal-600">Computing</Tab>
          </TabList>

          {categories.map((cat, index) => (
            <TabPanel key={index}>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
                {getPaginatedProducts(cat).length > 0 ? (
                  getPaginatedProducts(cat).map((item) => (
                    <ShopCard key={item._id} item={item} />
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-600">No data found</div>
                )}
              </div>
              <div className="flex justify-between">
                <button
                  className="px-4 py-2 bg-orange-600 rounded"
                  onClick={() => handlePageChange("prev", cat)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="px-4 py-2 bg-orange-600 rounded"
                  onClick={() => handlePageChange("next", cat)}
                  disabled={
                    currentPage * ITEMS_PER_PAGE >=
                    products.filter(
                      (item) =>
                        item.category === cat &&
                        (!searchTerm || item.brand_name?.toLowerCase().includes(searchTerm.toLowerCase()))
                    ).length
                  }
                >
                  Next
                </button>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default BuyingCart;
