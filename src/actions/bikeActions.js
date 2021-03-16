export const ADD_BIKE_FEATURE = "ADD_BIKE_FEATURE";
// export const REMOVE_FEATURE = "REMOVE_FEATURE";
// export const ADD_COST = "ADD_COST";

export const addFeature = (feature) => {
  return {
    type: ADD_BIKE_FEATURE,
    payload: feature,
  };
};
