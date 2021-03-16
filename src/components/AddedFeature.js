import React from "react";
import { removeFeature } from "../actions/carActions";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  return (
    <li>
      <button
        className="button"
        onClick={() => {
          removeFeature(props.feature);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
