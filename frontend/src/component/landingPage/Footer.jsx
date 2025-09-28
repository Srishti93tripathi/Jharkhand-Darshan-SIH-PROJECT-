import React from 'react'
import { IoIosSend } from "react-icons/io";
const Footer = () => {
  return (
    <>
   <footer className='bg-white text-dark pt-5 pb-3 mt-5 border-top'>
        <div className='col-12'>
          <div className='row px-4'>
            <div className='col-sm-6 col-md-3 mb-3'>
              <img src="/logo.png" alt="Logo" className="logo fw-bold mb-2" style={{height:55}}/>
              <p className='footer'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non inventore voluptas ut facilis quidem error consectetur, tempora quia expedita animi, dolorem nemo dicta odio id eius beatae voluptatum facere. 
              </p>
             
            </div>
            <div className='col-sm-6 col-md-3 mb-3 mt-3'>
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled mt-4">
                <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
                <li><a href="/services" className="text-dark text-decoration-none">Explore</a></li>
                <li><a href="/organic" className="text-dark text-decoration-none">Media</a></li>
                <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
                <li><a href="/contact" className="text-dark text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
            <div className='col-sm-6 col-md-3 mb-3 mt-3'>
             <h5 className="fw-bold">Help</h5>
              <ul className="list-unstyled mt-4">
                <li><a href="/" className="text-dark text-decoration-none"></a></li>
                <li><a href="/services" className="text-dark text-decoration-none"></a></li>
                <li><a href="/organic" className="text-dark text-decoration-none">Privacy & Policy</a></li>
                <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
                <li><a href="/contact" className="text-dark text-decoration-none">FAQ</a></li>
              </ul>
            </div>
            <div className='col-sm-6 col-md-3 mb-3 mt-3'>
               <h5 className='fw-bold pb-3'>Contact Us</h5>
            
              <p className='footer'>Email: jharkhand@gmail.com</p>
              <p className='footer'>Phone: +91 9876543210</p>
              <div className='d-flex gap-3'>
                <a href="#" className="text-dark"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-dark"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-dark"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <hr className="bg-light" />
          <p className="text-center mb-0 footer">&copy; {new Date().getFullYear()} Jharkhand Darshan. All rights reserved.</p>
        </div>

      </footer>
    </>
  )
}

export default Footer