import React from "react";
import {connect} from 'react-redux'
import { addCategory } from "../../redux/actions/actionCreators/uiActionCreators";

const mapDispatchToProps = {
  addCategory
}
const Category = ( props) => {
  const category = props.id
  const handleAddCategory = () => {
    props.addCategory(props.id)
  }
  return (
    <span
      id={category}
      onClick={handleAddCategory}
      style={{
        padding: 3,
        backgroundColor: "#ff3333",
        color: "#fff",
        marginRight: 5,
        cursor: "pointer",
        borderRadius: 3
      }}
    >
      {category}
    </span>
  );
};

export default connect(null, mapDispatchToProps)(Category)
