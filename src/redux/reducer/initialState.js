const INITIAL_STATE = {
  shouldAdminPageShow: false,
  newListing: {
    name:"",
    address: "",
    url: "",
    categories: [],
    phoneNumber:"",
    email: "",
  },
  notifications: [ ],
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

export default INITIAL_STATE