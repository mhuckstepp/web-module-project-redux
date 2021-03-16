import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { bikeReducer } from "./bikeReducer";

export const rootReducer = combineReducers({
  cars: carReducer,
  bikes: bikeReducer,
});
