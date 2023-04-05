import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css';



const Footer = () => {
  return (

    <div>
    <footer className='text-white bg-dark'>
      <div className='container'>
        <nav className='row'>
          <ul className='col-12 col-md list-unstyled'>
            <div className="icon-container">
              <li className='font-weight-bold mb-2'>Formas de pagos</li>
              <div>
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-diners-club"></i>
              </div>
            </div>
          </ul>
  
          <ul className='col-12 col-md list-unstyled'>
            <li className='font-weight-bold mb-2'>Términos y condiciones</li>
            <li className='font-weight-bold mb-2'>Política de privacidad</li>
            <li className='font-weight-bold mb-2'>Productos</li>
          </ul>
  
          <ul className='col-12 col-md list-unstyled'>
            <div className="icon-container">
              <li className='font-weight-bold mb-2'>Síguenos</li>
              <div>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </footer>
  
    <div className='text-white text-center py-3 bg-dark'>
    © DERECHOS RESERVADOS 2023
    </div>
  </div>
  
  )
}

export default Footer
    

