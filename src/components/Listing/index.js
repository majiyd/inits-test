import React from 'react'
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
    <div>
      <div>
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
            <span key={category}> {category} </span>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Listing