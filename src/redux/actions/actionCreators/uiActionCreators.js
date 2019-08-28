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