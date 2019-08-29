
import * as actionTypes from '../actions'
import INITIAL_STATE from './initialState'
import uniqid from "uniqid";


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
    case actionTypes.ADD_LISTING:{
      const newListing = {
        id: uniqid('id-'),
        ...action.payload
      }
      return{
        ...state,
        listings:[
          ...state.listings,
          newListing
        ],
        newListing: {
          ...state.newListing,
          categories: []
        },
        categories: INITIAL_STATE.categories
      }
    }
    case actionTypes.NOTIFICATION: {
      const notification = [{
        id: uniqid('id-'),
        message: action.payload
      }]
      return {
        ...state,
        notifications: notification
      }
    }
    case actionTypes.ADD_CATEGORY: {
      console.log(action.payload)
      const categories = state.categories.filter(
        category => (
          category !== action.payload
        )
      )
      return {
        ...state,
        categories: categories,
        newListing: {
          ...state.newListing,
          categories: [
            ...state.newListing.categories,
            action.payload
          ]
        }
      }
    }
    default:
      return state
  }
}
