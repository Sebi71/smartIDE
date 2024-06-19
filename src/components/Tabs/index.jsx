import { useSelector } from "react-redux";
import { useState } from "react";
import CodeTab from "../CodeTab";
import ButtonTab from "../ButtonTab";
import View from "../View";
import "./index.scss";

export default function Tabs() {
  const tabsState = useSelector((state) => state.tabs);
  const viewState = useSelector((state) => state.view);
  const [tabIndex, setTabIndex] = useState(tabsState[0].id);

  return (
    <div className="content-tabs">
      <div className="btn-tabs">
        {tabsState.map((tab) => (
          <ButtonTab
            key={tab.id}
            id={tab.id}
            toggleTab={(id) => setTabIndex(id)}
            imageURL={tab.imgURL}
            buttonContent={tab.buttonContent}
          />
        ))}
      </div>
      <div className="code-tabs">
        <CodeTab
          id={tabIndex}
          code={tabsState.find((obj) => obj.id === tabIndex).code}
        />
        {viewState.view && <View />}
      </div>
    </div>
  );
}
