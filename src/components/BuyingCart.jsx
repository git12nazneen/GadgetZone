

import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";

import ShopCard from "./ShopCard";
import useMenu from "../hooks/useMenu";

const BuyingCart = () => {
  const categories = ['media', 'drones', 'entertainment', 'desert', 'computing'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  // Correct usage of useMenu
  const { isLoading, error, products } = useMenu();

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }
  console.log(products[0]);

  // Log products to check the structure
  // Filter products based on category
  const drones = products.filter(item => item.category === 'drones');
  const security = products.filter(item => item.category === 'security');
  const home = products.filter(item => item.category === 'home');
  const entertainment = products.filter(item => item.category === 'entertainment');
  const media = products.filter(item => item.category === 'media');
  const computing = products.filter(item => item.category === 'computing');

  return (
    <div className="bg-slate-100 py-10">
      <div className="lg:max-w-4xl mx-auto my-8 text-center">
        <p className="text-sm text-orange-600 font-bold">LATEST PRODUCT</p>
        <h1 className="text-4xl font-bold">Explore Our New Arrival</h1>
      </div>

      <div className="max-w-5xl mx-auto my-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Home</Tab>
            <Tab>Technology</Tab>
            <Tab>Drones</Tab>
            <Tab>Securitys</Tab>
            <Tab>Media</Tab>
            <Tab>Computing</Tab>
          </TabList>

          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
              {home.map(item => <ShopCard key={item._id} item={item} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
              {drones.map(item => <ShopCard key={item._id} item={item} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
              {entertainment.map(item => <ShopCard key={item._id} item={item} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
              {security.map(item => <ShopCard key={item._id} item={item} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
              {media.map(item => <ShopCard key={item._id} item={item} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
              {computing.map(item => <ShopCard key={item._id} item={item} />)}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BuyingCart;
