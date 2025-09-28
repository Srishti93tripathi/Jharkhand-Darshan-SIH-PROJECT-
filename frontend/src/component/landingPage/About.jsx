import React from 'react'
import Navbar from './Navbar';
const About = () => {
  return (
    <>
      <Navbar />
      <section className="about-us-section py-5 ">
        <div className="container">
        
          <div className="row mb-4 text-center">
            <div className="col">
              <h2 className="fw-bold about-title">About Us</h2>
              <p className="about-subtitle mt-4">
                Welcome to <strong>Jharkhand Darshan</strong>! Our mission is to
                showcase the culture, heritage, and beauty of Jharkhand in one
                place.
              </p>
            </div>
          </div>

         
          <div className="row align-items-center mt-4">
            <div className="col-lg-6 mb-4">
              <h4 className="fw-semibold mb-3">Who We Are</h4>
              <p className="about-text">
                We are a passionate team dedicated to bringing the unexplored
                beauty of Jharkhand to the world. Our platform helps travelers,
                history lovers, and cultural enthusiasts discover the essence of
                this land.
              </p>
              <p className="about-text">
                From tourist destinations to cultural heritage, we provide
                authentic information and the best recommendations to make your
                journey unforgettable.
              </p>
            </div>

            <div className="col-lg-6 mb-4 text-center">
              <img
                src="/team.jpg"
                alt="Our Team"
                className="img-fluid rounded shadow team-img"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="row mt-5 text-center">
            <h4 className="mb-4 fw-semibold">Meet Our Team</h4>
            <div className="col-md-2 mb-4">
              <div className="card border-0 shadow team-card">
                <img
                  src="/member2.jpg"
                  className="card-img-top rounded-top"
                  alt="Member 1"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Srishti Tripathi</h5>
                  <p className="card-text text-muted">Team Leader & Backend Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 mb-4">
              <div className="card border-0 shadow team-card">
                <img
                  src="/member3.jpg"
                  className="card-img-top rounded-top"
                  alt="Member 2"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Ayush Umarvaishya</h5>
                  <p className="card-text text-muted">Database</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 mb-4">
              <div className="card border-0 shadow team-card">
                <img
                  src="/member1.jpg"
                  className="card-img-top rounded-top"
                  alt="Member 3"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Asmita Rajbhar</h5>
                  <p className="card-text text-muted">UI Design & Frontend Developer</p>
                </div>
              </div>
            </div>



            <div className="col-md-2 mb-4">
              <div className="card border-0 shadow team-card">
                <img
                  src="/member3.jpg"
                  className="card-img-top rounded-top"
                  alt="Member 4"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Hemlata Mishra</h5>
                  <p className="card-text text-muted">Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 mb-4">
              <div className="card border-0 shadow team-card">
                <img
                  src="/member3.jpg"
                  className="card-img-top rounded-top"
                  alt="Member 5"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Divya Singh</h5>
                  <p className="card-text text-muted">Web Hosting</p>
                </div>
              </div>
            </div>



            <div className="col-md-2 mb-4">
              <div className="card border-0 shadow team-card">
                <img
                  src="/member3.jpg"
                  className="card-img-top rounded-top"
                  alt="Member 6"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Sadiq Khan</h5>
                  <p className="card-text text-muted">AI Components</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About