import React from 'react';
import {connect} from 'react-redux';
import Listing from "../../components/Listing"

const mapStateToProps = (state) => {
  return{
    listings: state.listings
  }
}

const Listings = (props) => {
  return(
    <div>
      {props.listings.map(listing => (
        <Listing 
          key={listing.id}
          id={listing.id}
          name={listing.name}
          address={listing.address}
          url={listing.url}
          phoneNumber={listing.phoneNumber}
          description={listing.description}
          categories={listing.categories}
          email={listing.email}
        />
      ))}
    </div>
  )
}

export default connect(mapStateToProps)(Listings)