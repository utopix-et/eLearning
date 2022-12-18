import React from 'react'

const Cards = ({img, levelIcon}) =>{
    return(
        <>
        <div className="card-row p-4">
        <div className="col-md-3 col-12">
          <div className="card">
                <img src={img} className="card-img-top" alt="frontend-foundation-img" />
            <div className="card-body">
              <h5 className="card-title">
                Frontend Foundation HTML + CSS
              </h5>
              <div className="py-2">
                <levelIcon className="text-success" />
                Beginner
                </div>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div></>
    )
}

export default Cards;