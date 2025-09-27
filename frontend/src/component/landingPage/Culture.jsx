import React from 'react'

const Culture = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col text-center">
            <h3 className="section-title">Culture & Heritage of Jharkhand</h3>
            <p className="section-subtitle">
              Discover the vibrant traditions, art, festivals, and heritage sites of Jharkhand.
            </p>
          </div>
        </div>

        {/* Culture Cards */}
        <div className="row g-4">
         
          <div className="col-lg-4 col-md-6">
            <div className="card culture-card shadow-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chhau_Dance.jpg/640px-Chhau_Dance.jpg"
                className="card-img-top"
                alt="Chhau Dance"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Chhau Dance</h5>
                <p className="card-text">
                  A traditional dance form blending martial arts, tribal rituals, and folk music.
                </p>
              </div>
            </div>
          </div>

         
          <div className="col-lg-4 col-md-6">
            <div className="card culture-card shadow-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Parasnath_temple.jpg/640px-Parasnath_temple.jpg"
                className="card-img-top"
                alt="Parasnath Hills"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Parasnath Hills</h5>
                <p className="card-text">
                  A major Jain pilgrimage site and home to ancient temples and heritage.
                </p>
              </div>
            </div>
          </div>

         
          <div className="col-lg-4 col-md-6">
            <div className="card culture-card shadow-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Karam_Festival.jpg"
                className="card-img-top"
                alt="Karam Festival"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Karam Festival</h5>
                <p className="card-text">
                  A harvest festival celebrated with music, dance, and cultural rituals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Culture