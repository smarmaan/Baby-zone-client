import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CustomTab = () => {
  return (
    <div className="card-body bg-[#fbffdc]">
      <Tabs className="text-center  ">
        <TabList className={`flex justify-center`}>
          <Tab className={`bg-[#ff4a4a] w-28 mx-2 rounded-md text-white`}>
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              Marvel
            </div>
          </Tab>
          <Tab className={`bg-[#ff4a4a] w-44 mx-2  rounded-md text-white`}>
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              Transformer
            </div>
          </Tab>
          <Tab className={`bg-[#ff4a4a] w-28 mx-2 rounded-md text-white`}>
            <div className="font-Cambria text-2xl font-extrabold rounded-xl ">
              DC
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>here we will have 3 cards... </h2>
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
