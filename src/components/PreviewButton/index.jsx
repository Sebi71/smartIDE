
import showView from "../../assets/view.svg";
import hideView from "../../assets/hide.svg";
import {useSelector, useDispatch} from "react-redux";
import {toggleView} from "../../features/view";
import "./index.scss";

export default function PreviewButton() {
  const dispatch = useDispatch();
  const viewData = useSelector((state) => state.view);

  return (
    <button 
      className="view-btn"
      onClick={() => dispatch(toggleView())}>
      <img 
        className="img-btn-view" 
        src={viewData.view ? hideView : showView}
        alt="" />
      <span>{viewData.view ? "Hide view" : "Show view"}</span>
    </button>
  );
}
