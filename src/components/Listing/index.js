import React from 'react'
import styles from './Listing.module.css'
const Listing = ({
  id,
  name,
  address,
  url,
  phoneNumber,
  description,
  categories,
  email
}) => {
  return (
    <div className={styles.listing}>
      <h2>{name}</h2>
      <h3>{address}</h3>
      <p>{description}</p>
      <p>
        <span>{url}</span> | 
        <span>{phoneNumber}</span> | 
        <span>{email} </span>
      </p>
      <div>
        {categories.map(category => (
          <span key={category} id={category}
            style={{
              padding: 3,
              backgroundColor: "#ff3333",
              color: "#fff",
              position: "relative",
              top: 5,
              marginRight: 5,
              cursor: "pointer",
              borderRadius: 3
            }}
          >
            {category}
          </span>
        ))}
      </div>
    </div>

  )
}

export default Listing