import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CustomTab = () => {
  return ( 
    <div className="card-body bg-[#fbffdc] rounded-2xl shadow-xl drop-shadow-xl">
      <Tabs className="text-center bg-[#98eecc] rounded-2xl py-6 shadow-xl drop-shadow-xl">
        <TabList className={`flex justify-center cursor-pointer `}>
          <Tab className={`bg-[#ff4a4a] w-28 mx-2 rounded-md text-white shadow-xl drop-shadow-xl`}>
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              Marvel
            </div>
          </Tab>
          <Tab className={`bg-[#ff4a4a] w-44 mx-2  rounded-md text-white shadow-xl drop-shadow-xl`}>
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              Transformer
            </div>
          </Tab>
          <Tab className={`bg-[#ff4a4a] w-28 mx-2 rounded-md text-white shadow-xl drop-shadow-xl`}>
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              DC
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="mb-10 mt-20 bg-[#ff4a4a] mx-5 rounded-2xl">here we will have 3 cards... </h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2 </h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3 </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CustomTab;
