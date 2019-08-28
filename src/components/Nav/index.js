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
    <div>
      <div onClick={handleShowAdmin}>Admin</div>
      <div onClick={handleHideAdmin}>Listing</div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Nav)