import { useDispatch } from "react-redux";
import { hideView } from "../../features/view";
import "./index.scss";

export default function ButtonTab({ id, toggleTab, buttonContent, imageURL }) {
  const dispatch = useDispatch();

  function changeView () {
    dispatch(hideView());
    toggleTab(id);
  }

  return (
    <button
      className="btn-tab"
      onClick={() => changeView()}
    >
      <img className="img-tab" src={imageURL} alt="" />
      <span className="text-tab">{buttonContent}</span>
    </button>
  );
}
