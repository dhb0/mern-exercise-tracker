import { combineReducers } from "redux";
import {
  exerciseReducer,
  userReducer,
  singleExerciseReducer,
} from "./dataReducers";

export default combineReducers({
  exercises: exerciseReducer,
  users: userReducer,
  singleExercise: singleExerciseReducer,
});
