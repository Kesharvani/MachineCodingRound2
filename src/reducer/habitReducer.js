import { ACTION_TYPE } from "../utils/index";

export const initialValue = {
  habit: [],
  archive: []
};
export const habitReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        habit: action.payload
      };
    case ACTION_TYPE.ARCHIVE:
      return {
        ...state,
        habit: state.habit.filter((item) => item.id !== action.payload.id),
        archive: [...state.archive, action.payload]
      };
    case ACTION_TYPE.DELETE:
      return {
        ...state,
        habit: state.habit.filter((item) => item.id !== action.payload?.id)
      };
    case ACTION_TYPE.ADD:
      return {
        ...state,
        habit: [...state.habit, action.payload]
      };
    default:
      console.error("some errror in reducer");
  }
};
