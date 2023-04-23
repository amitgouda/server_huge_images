import { useState, useMemo } from "react";
import "./App.css";
import CustomTab from "./Component/CustomTab";
import { TABS } from "./constants";
import Normal from "./Component/Normal";
import Optimize from "./Component/Optimize";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const ScreenView = useMemo(
    () => (currentTab ? Optimize : Normal),
    [currentTab]
  );

  return (
    <div className="App">
      <div className="tab-head">
        {TABS.map((tabItem, index) => (
          <CustomTab
            setCurrentTab={setCurrentTab}
            key={tabItem.value + index}
            name={tabItem.name}
            value={tabItem.value}
            isTabSelected={currentTab === tabItem.value}
          />
        ))}
      </div>
      <div className="tab-view-container">
        <div className="view-container">
          <ScreenView />
        </div>
      </div>
    </div>
  );
}

export default App;
