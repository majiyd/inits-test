import React from 'react'
import {connect} from 'react-redux'
import {inputListingName, inputListingAddress, inputListingUrl, inputListingCategories, inputListingPhoneNumber, inputListingEmail, inputListingDescription, addListing} from "../../redux/actions/actionCreators/uiActionCreators";

/**
 * create action type
 * create action creator
 * add case to reducer
 * mapdispatch to props
 * map state to props
 * create event handler
 * bind event handler
 */
const mapStateToProps = state => {
  return{
    newListing: state.newListing
  }
}
const mapDispatchToProps = {
  inputListingName,
  inputListingAddress,
  inputListingUrl,
  inputListingPhoneNumber,
  inputListingCategories,
  inputListingEmail,
  inputListingDescription,
  addListing

}
const Admin = (props) => {
  const handleListingNameInput = e => {
    props.inputListingName(e.target.value)
  }
  const handleListingAddressInput = e => {
    props.inputListingAddress(e.target.value)
  }
  const handleListingUrlInput = e => {
    props.inputListingUrl(e.target.value)
  }
  const handleListingDescriptionInput = e => {
    props.inputListingDescription(e.target.value)
  }
  const handleListingPhoneNumberInput = e => {
    props.inputListingPhoneNumber(e.target.value)
  }
  const handleListingEmailInput = e => {
    props.inputListingEmail(e.target.value)
  }
  const handleListingCategoryInput = e => {
    props.inputListingCategories(e.target.value)
  }
  const handleSubmit = e => {
    props.addListing(props.newListing)
    e.preventDefault()
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={handleListingNameInput}/>
        <input placeholder="Address" onChange={handleListingAddressInput}/>
        <textarea defaultValue="Add description" onChange={handleListingDescriptionInput}></textarea>
        <input placeholder="website" onChange={handleListingUrlInput}/>
        <input placeholder="phone Number" onChange={handleListingPhoneNumberInput}/>
        <input placeholder="email" onChange={handleListingEmailInput}/>
        <input placeholder="category" onChange={handleListingCategoryInput}/>
        <input type="submit" value="add" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Admin)