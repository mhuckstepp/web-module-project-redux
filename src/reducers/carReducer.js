import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/carActions";

const initialState = {
  additionalPrice: 0,
  currentCar: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500, show: true },
    { id: 2, name: "Racing detail package", price: 1500, show: true },
    { id: 3, name: "Premium sound system", price: 500, show: true },
    { id: 4, name: "Rear spoiler", price: 250, show: true },
  ],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        currentCar: {
          ...state.currentCar,
          features: [...state.currentCar.features, action.payload],
        },
        additionalPrice: state.additionalPrice + action.payload.price,
        additionalFeatures: state.additionalFeatures.map((feature) => {
          if (feature && feature.id === action.payload.id) {
            return { ...feature, show: false };
          } else {
            return feature;
          }
        }),
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalFeatures: state.additionalFeatures.map((feature) => {
          if (feature && feature.id === action.payload.id) {
            return { ...feature, show: true };
          } else {
            return feature;
          }
        }),
        additionalPrice: state.additionalPrice - action.payload.price,
        currentCar: {
          ...state.currentCar,
          features: state.currentCar.features.map((feature) => {
            if (feature && feature.id === action.payload.id) {
              return null;
            } else {
              return feature;
            }
          }),
        },
      };
    default:
      return state;
  }
};
