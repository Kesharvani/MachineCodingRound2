import { useState } from "react";
import { v4 as uuid } from "uuid";

import "./AddHabit.css";
import { useHabit } from "../../../../context/HabitContext";
import { ACTION_TYPE } from "../../../../utils/index";

export const AddHabit = ({ close }) => {
  const { dispatch } = useHabit();
  const [address, setAddress] = useState({
    name: "",
    timeOfDay: "",
    repeat: "",
    goal: "",
    startDay: ""
  });

  const inputHandler = (e, key) => {
    console.log(e.target.value, key);
    setAddress((prev) => ({ ...prev, [key]: e.target.value, id: uuid() }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION_TYPE.ADD, payload: address });
    close();
  };
  return (
    <>
      <div className="add_habit_wrapper">
        <h2>New Habit</h2>
        <form className="formWrapper" onSubmit={submit}>
          <div>
            <label htmlFor="habitName">Name:</label>
            <input
              type="text"
              name="habitName"
              value={address.name}
              required
              onChange={(e) => inputHandler(e, "name")}
            />
          </div>
          <div className="repeat_goal_wrapper">
            <div>
              <label htmlFor="repeat">Repeat</label>
              <select
                name="repeat"
                id="repeatHabit"
                value={address.repeat}
                onChange={(e) => inputHandler(e, "repeat")}
              >
                <option value="daily">Daily</option>
                <option value="alternate">alternate day</option>
              </select>
            </div>
            <div>
              <label htmlFor="goal">Goal:</label>
              <select
                name="goal"
                id="goalHabit"
                value={address.goal}
                onChange={(e) => inputHandler(e, "goal")}
              >
                <option value="singletime">1 time daily</option>
                <option value="twice">2 time daily</option>
              </select>
            </div>
          </div>
          <div className="timeOfDay_startDate_wrapper">
            <div>
              <label htmlFor="timeOfDay">Time Of Day:</label>
              <select
                name="timeOfDay"
                id="timeOfDayHabit"
                value={address.timeOfDay}
                onChange={(e) => inputHandler(e, "timeOfDay")}
              >
                <option value="anyTime">Any Time</option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            <div>
              <label htmlFor="startDate">Start Date:</label>
              <select
                name="startDate"
                id="startDateHabit"
                value={address.startDay}
                onChange={(e) => inputHandler(e, "startDay")}
              >
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
              </select>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};
