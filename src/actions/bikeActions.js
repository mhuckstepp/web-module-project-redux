export const ADD_BIKEFEATURE = "ADD_BIKEFEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_COST = "ADD_COST";

export const addFeature = (feature) => {
  return {
    type: ADD_BIKEFEATURE,
    payload: feature,
  };
};
