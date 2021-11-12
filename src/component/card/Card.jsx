import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name, desc, image, _id, price}) => {
    return (
        <div className="card" style={{width:'18rem' ,margin:'10px auto', boxShadow:'0 0 5px 2px black', backgroundColor:'dimgrey'}}>
  <img src={image} className="card-img-top" alt={name}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{desc.slice(0, 50)}.....</p>
    <h6>Price: ${price.toLocaleString()}</h6>
    <Link to={`/cars/${_id}`} className="btn btn-dark" > Buy Now</Link>
  </div>
</div>
    )
}

export default Card
