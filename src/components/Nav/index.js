import React from 'react'
import {connect} from 'react-redux'
import { clickOnShowAdminPage, clickOnHideAdminPage } from "../../redux/actions/actionCreators/uiActionCreators";

const mapDispatchToProps = {
  clickOnShowAdminPage,
  clickOnHideAdminPage
}
const Nav = (props) => {
  const handleShowAdmin = () => {
    props.clickOnShowAdminPage()
  }
  const handleHideAdmin = () => {
    props.clickOnHideAdminPage()
  }
  return (
    <div style={{display: "flex", padding: "3%", backgroundColor: "white"}}>
      <div style={{marginRight: "3%", cursor: "pointer"}} onClick={handleShowAdmin}>Add New</div>
      <div style={{marginRight: "3%", cursor: "pointer"}} onClick={handleHideAdmin}>Listing</div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Nav)