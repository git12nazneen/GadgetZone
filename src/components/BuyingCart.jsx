
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
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10">Error loading products</div>;
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

    // Apply sorting
    if (sortOrder === "asc" || sortOrder === "desc") {
      filteredProducts.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.newPrice - b.newPrice;
        } else {
          return b.newPrice - a.newPrice;
        }
      });
    } else if (sortOrder === "newest") {
      filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = (direction, category) => {
    setCurrentPage((prevPage) => {
      const totalItems = products.filter(
        (item) =>
          item.category === category &&
          (!searchTerm ||
            item.brand_name?.toLowerCase().includes(searchTerm.toLowerCase()))
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
    <div className="bg-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm text-orange-600 font-bold">LATEST PRODUCT</p>
        <h1 className="text-3xl sm:text-4xl font-bold">Explore Our New Arrival</h1>
      </div>

      <div className="max-w-4xl mx-auto my-20">
        {/* Search and Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Search by brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded w-full sm:w-1/2 lg:w-1/3"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border rounded bg-white w-full sm:w-1/4 lg:w-1/5"
          >
            <option value="asc">Sort by Price: Low to High</option>
            <option value="desc">Sort by Price: High to Low</option>
            <option value="newest">All Newest Products</option>
          </select>
        </div>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            setCurrentPage(1);
          }}
        >
          <TabList className="flex flex-wrap justify-center space-x-4 mb-6">
            <h2 className="pt-2 text-orange-600 font-bold">Recommended Category: </h2>
            {categories.map((cat, index) => (
              <Tab
                key={index}
                className={`px-4 py-2 bg-white text-black rounded-md border hover:bg-opacity-75 ${index === tabIndex ? 'bg-gray-200' : ''}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Tab>
            ))}
          </TabList>
            
          {categories.map((cat, index) => (
            <TabPanel key={index}>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10 max-w-5xl">
                  {getPaginatedProducts(cat).length > 0 ? (
                    getPaginatedProducts(cat).map((item) => (
                      <ShopCard key={item._id} item={item} />
                    ))
              ) : (
                    <div className="col-span-full text-center text-gray-600">
                      No data found
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  className="px-4 py-2 bg-orange-600 text-white rounded"
                  onClick={() => handlePageChange("prev", cat)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="px-4 py-2 bg-orange-600 text-white rounded"
                  onClick={() => handlePageChange("next", cat)}
                  disabled={
                    currentPage * ITEMS_PER_PAGE >=
                    products.filter(
                      (item) =>
                        item.category === cat &&
                        (!searchTerm ||
                          item.brand_name
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase()))
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
