import { useNavigate } from "react-router-dom";

import "./HabitArchivepage.css";
import arrow from "../../assets/arrow-back.svg";
import { HabitTile } from "../../common/habitTile/HabitTile";
import { useHabit } from "../../context/HabitContext";
export const HabitArchivePage = () => {
  const navigate = useNavigate();
  const { state } = useHabit();
  return (
    <>
      <div className="archive_page">
        <button onClick={() => navigate("/")}>
          <img src={arrow} alt="backArrow" />
        </button>
        <h2>Archive Page</h2>
      </div>
      <hr />
      {state.archive.length === 0 ? (
        <div className="archive_not_found_wrapper">
          <div>Sorry!!No Archive Found</div>
        </div>
      ) : (
        <div>
          <HabitTile habit={state?.archive} archive />
        </div>
      )}
    </>
  );
};
