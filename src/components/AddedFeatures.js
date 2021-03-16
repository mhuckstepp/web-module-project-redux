import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";
import { removeFeature } from "../actions/carActions";

const AddedFeatures = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map((item) =>
            item ? (
              <AddedFeature
                key={item.id}
                feature={item}
                removeFeature={props.removeFeature}
              />
            ) : null
          )}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.cars.currentCar.features,
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
