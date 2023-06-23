import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from "react";

import { habitReducer } from "../reducer/habitReducer";
import { initialValue } from "../reducer/habitReducer";
import { fakeFetch } from "../db/habitData";
import { ACTION_TYPE } from "../utils";
export const HabitContext = createContext();
export const HabitProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitReducer, initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const getHabitData = async () => {
    setIsLoading(true);
    try {
      const {
        data: { habits },
        status
      } = await fakeFetch("https://example.com/api/allhabits");
      if (status === 200) {
        dispatch({ type: ACTION_TYPE.SUCCESS, payload: habits });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getHabitData();
  }, []);
  return (
    <HabitContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
