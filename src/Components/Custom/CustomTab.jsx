import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CustomTabCards from "./CustomTabCards";
import { useState } from "react";

const CustomTab = () => {
  const [cardData, setCardData] = useState([]);

  fetch("https://baby-zone-server.vercel.app/all-toys").then((res) =>
    res.json().then((data) => setCardData(data))
  );

  return (
    <div className="card-body bg-[#fbffdc] rounded-2xl shadow-xl drop-shadow-xl">
      <Tabs className="text-center bg-[#98eecc] rounded-2xl py-6 shadow-xl drop-shadow-xl">
        <TabList className={`flex justify-center cursor-pointer `}>
          <Tab
            className={`bg-[#ff4a4a] w-28 mx-2 rounded-md text-white shadow-xl drop-shadow-xl`}
          >
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              Marvel
            </div>
          </Tab>
          <Tab
            className={`bg-[#ff4a4a] w-44 mx-2  rounded-md text-white shadow-xl drop-shadow-xl`}
          >
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              Transformer
            </div>
          </Tab>
          <Tab
            className={`bg-[#ff4a4a] w-28 mx-2 rounded-md text-white shadow-xl drop-shadow-xl`}
          >
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              DC
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="mb-10 mt-20 bg-[#ff4a4a] mx-5 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card w-[100%] h-[100%]">
              {cardData
                .filter((data) => data.brand === "Marvel")
                .slice(0, 3)
                .map((data) => (
                  <CustomTabCards key={data._id} data={data}></CustomTabCards>
                ))}
            </div>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="mb-10 mt-20 bg-[#ff4a4a] mx-5 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card w-[100%] h-[100%]">
              {cardData
                .filter((data) => data.brand === "Transformers")
                .slice(0, 3)
                .map((data) => (
                  <CustomTabCards key={data._id} data={data}></CustomTabCards>
                ))}
            </div>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="mb-10 mt-20 bg-[#ff4a4a] mx-5 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card w-[100%] h-[100%]">
              {cardData
                .filter((data) => data.brand === "DC")
                .slice(0, 3)
                .map((data) => (
                  <CustomTabCards key={data._id} data={data}></CustomTabCards>
                ))}
            </div>
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CustomTab;
