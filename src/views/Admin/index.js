import React from 'react'
import {connect} from 'react-redux'
import {inputListingName, inputListingAddress, inputListingUrl, inputListingPhoneNumber, inputListingEmail, inputListingDescription, addListing, notification, clickOnHideAdminPage} from "../../redux/actions/actionCreators/uiActionCreators";
import styles from './Admin.module.css'
import Category from "../../components/Category"

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
    newListing: state.newListing,
    categories: state.categories
  }
}
const mapDispatchToProps = {
  inputListingName,
  inputListingAddress,
  inputListingUrl,
  inputListingPhoneNumber,
  inputListingEmail,
  inputListingDescription,
  addListing,
  notification,
  clickOnHideAdminPage,
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

  const handleSubmit = e => {
    props.addListing(props.newListing)
    props.notification()
    props.clickOnHideAdminPage()
    e.preventDefault()
  }
  return(
    <div className={styles.admin} >
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required onChange={handleListingNameInput}/>
        <input placeholder="Address" required onChange={handleListingAddressInput}/>
        <textarea defaultValue="Add description" onChange={handleListingDescriptionInput}></textarea>
        <input placeholder="website" required onChange={handleListingUrlInput}/>
        <input placeholder="phone Number" required onChange={handleListingPhoneNumberInput}/>
        <input placeholder="email" required onChange={handleListingEmailInput}/>
        <h2>Categories</h2>
        <div style={{padding: "3%", margin: "3% 0"}}>
          {props.newListing.categories.map(category => (
            <span key={category} id={category}
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
          ))}
        </div>
        <h3>Add Categories</h3>
        <div style={{padding:"3% 0", margin: "1% 0"}}>
          {props.categories.map(category =>(
            <Category key={category} category={category} id={category}/>
          ))}
        </div>
        <input type="submit" value="Add" className={styles.button} />
      </form>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Admin)