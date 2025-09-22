import { useEffect } from 'react';
import { Tooltip } from 'bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom shadow-sm sticky-top px-3 bg-white">
        <div className="container-fluid ">

          <img src="/logo.png" alt="Logo" className="logo fw-bold" style={{ height: 65 }} />

          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li className="nav-item"><Link className="nav-link text-dark mx-3" to="/">Home</Link></li>
              <li className="nav-item dropdown"> <Link className="nav-link text-dark mx-3 " to="/explore" role="button" data-bs-toggle="dropdown" aria-expanded="false">Explore</Link>
                <ul className="dropdown-menu"> <li><Link className="dropdown-item" to="/history">History</Link></li>
                  <li><Link className="dropdown-item" to="/culture">Culture & Art</Link></li>
                  <li><Link className="dropdown-item" to="/destination">Destination</Link></li> </ul> </li>
              <li className="nav-item"><Link className="nav-link text-dark mx-3" to="/media">Media</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark mx-3" to="/about">About Us</Link></li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <div className="search-container">
                <div className="search-wrapper">
                  <i className="fa-solid fa-location-dot location" data-bs-toggle="tooltip" data-bs-placement="top" title="Detect your location"></i>
                  <input className="form-control searchBox py-2 border-0 rounded-2" type="text" placeholder="Search your destination." />
                  <i className="fa fa-microphone mic-icon" ></i>
                </div>
                <button className="search-btn border-0 rounded-2 px-3 py-2" >Search</button>
              </div>

              <Link to='/login'> <button className=" btn1 px-3 py-2 border-0 rounded-2">Login</button></Link>
              <Link to='/register'> <button className=" btn1 px-3 py-2 border-0 rounded-2">Signup</button></Link>

            </div>
          </div>
        </div >

      </nav >
    </>
  )
}
export default Navbar