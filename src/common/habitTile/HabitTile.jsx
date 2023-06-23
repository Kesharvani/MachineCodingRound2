import "./HabitTile.css";
import { useHabit } from "../../context/HabitContext";
import { ACTION_TYPE } from "../../utils/index";
export const HabitTile = ({ habit, archive }) => {
  const { dispatch } = useHabit();
  return (
    <div className="card_wrapper">
      {habit.map((item) => {
        return (
          <div key={item.id} className="card">
            <span> {item.name}</span>
            <div className="btn-wrapper">
              <button
                disabled={archive}
                onClick={() =>
                  dispatch({ type: ACTION_TYPE.ARCHIVE, payload: item })
                }
              >
                Archive
              </button>
              <div className="delete_edit_wrapper">
                <button
                  disabled={archive}
                  onClick={() =>
                    dispatch({ type: ACTION_TYPE.DELETE, payload: item })
                  }
                >
                  Delete
                </button>
                <button disabled={archive}>Edit</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
