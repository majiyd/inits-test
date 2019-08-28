import React from 'react';
import {connect} from 'react-redux'
import Listings from './views/Listings'
import Admin from './views/Admin'
import Nav from './components/Nav'

const mapStateToProps =  state => {
  return{
    showAdminPage: state.shouldAdminPageShow
  }
}
const App = (props) => {
  return(
    <div>
    <Nav />
    {props.showAdminPage ? (<Admin />):(<Listings />)}
    </div>
  )
}
export default connect(mapStateToProps)(App)