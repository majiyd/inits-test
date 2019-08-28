import * as actionTypes from '../../actions'


export const clickOnShowAdminPage = () => {
  return {
    type: actionTypes.SHOW_ADMIN_PAGE
  }
}

export const clickOnHideAdminPage = () => {
  return {
    type: actionTypes.HIDE_ADMIN_PAGE
  }
}

export const inputListingName = (value) => {
  return {
    type: actionTypes.INPUT_LISTING_NAME,
    payload: value
  }
}
export const inputListingAddress = (value) => {
  return {
    type: actionTypes.INPUT_LISTING_ADDRESS,
    payload: value
  }
}
export const inputListingUrl = (value) => {
  return {
    type: actionTypes.INPUT_LISTING_URL,
    payload: value
  }
}
export const inputListingCategories = (value) => {
  return {
    type: actionTypes.INPUT_LISTING_CATEGORIES,
    payload: value
  }
}
export const inputListingPhoneNumber = (value) => {
  return {
    type: actionTypes.INPUT_LISTING_PHONENUMBER,
    payload: value
  }
}
export const inputListingEmail = (value) => {
  return {
    type: actionTypes.INPUT_LISTING_EMAIL,
    payload: value
  }
}
export const inputListingDescription = (value) => {
  return {
    type: actionTypes.INPUT_LISTING_DESCRIPTION,
    payload: value
  }
}

export const addListing = (listing) => {
  return{
    type: actionTypes.ADD_LISTING,
    payload: listing
  }
}