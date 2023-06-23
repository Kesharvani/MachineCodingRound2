import { useNavigate } from "react-router-dom";

import "./HabitListingpage.css";
import plus from "../../assets/plus.svg";
import { useHabit } from "../../context/HabitContext";
import { HabitTile } from "../../common/habitTile/HabitTile";
import { Loader } from "../../common/loader/Loader";
import { AddHabit } from "./components/addHabit/AddHabit";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export const HabitListingPage = () => {
  const navigate = useNavigate();
  const { state, isLoading } = useHabit();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : state?.habit.length === 0 ? (
        <>
          <div className="home_page">
            <h1>Home Page</h1>
            <button onClick={() => navigate("/archive")} className="btn">
              Go To Archive
            </button>
          </div>
          <hr />
          <div className="not_found_message_div">No Item found</div>
        </>
      ) : (
        <div className="home_page">
          <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate("/archive")} className="btn">
              Go To Archive
            </button>
          </div>
          <hr />
          <HabitTile habit={state?.habit} />
          <Popup
            trigger={
              <button>
                <img src={plus} alt="plusIcon" width="50px" />
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <>
                <AddHabit close={close} />
                <button
                  onClick={() => close()}
                  style={{ width: "100%", marginTop: "0.5rem" }}
                >
                  discard
                </button>
              </>
            )}
          </Popup>
          <div className="plus_icon_wrapper"></div>
        </div>
      )}
    </>
  );
};
