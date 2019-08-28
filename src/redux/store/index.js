import {createStore} from 'redux'
import * as actionTypes from '../actions'

const initialState = {
  shouldAdminPageShow: false,
  listings: [{
    id: 1,
    name: "inits",
    address: "16 some area, idk",
    url: "inits.ng",
    categories: [
      "web",
      "android"
    ],
    phoneNumber: "+2345839",
    email: "suyiuon@jhdf.com"
  }, {
    id: 2,
    name: "glow",
    address: "glo plaza",
    url: "glo.com.ng",
    categories: [
      "telecom"
    ],
    phoneNumber: "+234fdfd5839",
    email: "info@glo.com"
  }
  ]
}

function reducer(state = initialState, action) {
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
    default:
      return state
  }
}

const store = createStore(reducer)

export default store