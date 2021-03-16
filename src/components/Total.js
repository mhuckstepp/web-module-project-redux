import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  return (
    <div className="content">
      <h4>
        Total Amount: $
        {props.cars.currentCar.price + props.cars.additionalPrice}
      </h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps)(Total);
