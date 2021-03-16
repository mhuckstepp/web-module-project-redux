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
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        currentCar: {
          ...state.currentCar,
          features: [...state.currentCar.features, action.payload.feature],
        },
        additionalPrice: state.additionalPrice + action.payload.price,
      };
    case REMOVE_FEATURE:
      console.log("run in reducer");
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        currentCar: {
          ...state.currentCar,
          features: state.currentCar.features.map((feature) => {
            if (feature.name === action.feature.name) {
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
