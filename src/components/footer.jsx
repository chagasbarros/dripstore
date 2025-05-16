import React from "react";
import logoDripPB from "../assests/logo/DigitallFooter.svg";
import twiter from "../assests/logo/twiter.svg"
import insta from "../assests/logo/insta.svg"
import face from "../assests/logo/face.svg"
const footer = () => {
    return (
      <footer className="bg-dark text-light pt-5 mt-2">
        <div className="container">
          <div className="row">
            
            <div className="col-md-3 mb-4">
              
                <img
                              src={logoDripPB}
                              alt="LogoPB"
                              className="me-2"
                              style={{ width: "150px"}}
                            />
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div>
                <a href="#" className="text-light me-3">
                <img
                                src={face}
                                alt="facebook"
                                className=""
                                style={{ width: "25px", height: "25px"}}
                              />
                </a>
                <a href="#" className="text-light me-3">
                <img
                                src={insta}
                                alt="instagram"
                                className=""
                                style={{ width: "25px"}}
                              />
                </a>
                <a href="#" className="text-light">
                  <img
                                src={twiter}
                                alt="twiter"
                                style={{ width: "25px"}}
                              />
                </a>
              </div>
            </div>
  
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Informação</h6>
              <ul className="list-unstyled">
                {['Sobre Drip Store', 'Segurança', 'Wishlist', 'Blog', 'Trabalhe conosco', 'Meus Pedidos'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-light text-decoration-none">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Categorias</h6>
              <ul className="list-unstyled">
                {['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-light text-decoration-none">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Contato</h6>
              <address className="text-light">
                Av. Santos Dumont, 1510 – 1 andar <br />
                Aldeota, Fortaleza – CE, 60150-161 <br />
                (85) 3051-3411
              </address>
            </div>
          </div>
  
          <hr className="border-secondary" />
  
          <div className="text-center pb-3">
            © 2025 Digital College
          </div>
        </div>
      </footer>
    );
  };
  
  export default footer;