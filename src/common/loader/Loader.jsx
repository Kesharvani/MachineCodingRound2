import "./Loader.css";
import loader from "../../assets/loader.gif";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};
