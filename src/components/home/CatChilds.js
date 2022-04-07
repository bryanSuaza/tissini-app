import React from 'react'

const CatChilds = ({
    id,
    name,
    category,
    image,
    parent_id
}) => {

  return (
  
  parent_id !== null && 
    <div className="col-md-3 g-3">
      <div className="card">
        <img
          src={`https://v3.tissini.app/${image}`}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{category}</h5>
          <p className="card-text">{name}</p>

          <button
            type="button"
            className="btn btn-dark"
          >
          agregar al carrito
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default CatChilds;
