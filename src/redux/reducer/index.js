
import * as actionTypes from '../actions'
import INITIAL_STATE from './initialState'


export function reducer(state = INITIAL_STATE, action) {
  console.log(state.newListing)
  switch (action.type){
    case actionTypes.SHOW_ADMIN_PAGE: {
      return {
        ...state,
        shouldAdminPageShow: true
      }
    }
    case actionTypes.HIDE_ADMIN_PAGE: {
      return {
        ...state,
        shouldAdminPageShow: false
      }
    }
    case actionTypes.INPUT_LISTING_NAME: {
      return{
        ...state, 
        newListing: {
          ...state.newListing,
          name: action.payload
        }
      }
    }

    case actionTypes.INPUT_LISTING_ADDRESS: {
      return{
        ...state, 
        newListing: {
          ...state.newListing,
          address: action.payload
        }
      }
    }

    case actionTypes.INPUT_LISTING_URL: {
      return{
        ...state, 
        newListing: {
          ...state.newListing,
          url: action.payload
        }
      }
    }

    case actionTypes.INPUT_LISTING_CATEGORIES: {
      return{
        ...state, 
        newListing: {
          ...state.newListing,
          categories: [action.payload]
        }
      }
    }
    case actionTypes.INPUT_LISTING_PHONENUMBER: {
      return{
        ...state, 
        newListing: {
          ...state.newListing,
          phoneNumber: action.payload
        }
      }
    }
    case actionTypes.INPUT_LISTING_EMAIL: {
      return{
        ...state, 
        newListing: {
          ...state.newListing,
          email: action.payload
        }
      }
    }
    case actionTypes.INPUT_LISTING_DESCRIPTION: {
      return{
        ...state, 
        newListing: {
          ...state.newListing,
          description: action.payload
        }
      }
    }
    default:
      return state
  }
}
