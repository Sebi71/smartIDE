import PreviewButton from "../../components/PreviewButton";
import Tabs from "../../components/Tabs";
import "./index.scss";

export default function Main() {
  return (
    <div className="container-head-bar">
      <div className="head-bar">
        <h1 className="head-title">SmartIDE</h1>
        <div className="head-button"><PreviewButton /></div>
        <div className="head-point">
          <div className="content-point">
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  );
}
