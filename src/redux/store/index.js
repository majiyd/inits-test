import {createStore} from 'redux'

const initialState = {
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
  // console.log('reducer', state, action);
  return state;
}

const store = createStore(reducer)

export default store