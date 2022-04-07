import React from 'react';
import LoginComponent from './LoginComponent';

const LoginApp = ({title = "Agrega un titulo aquí",subtitle = "Digita un subtitulo aquí",}) => {

  return (
    <>
     <main>

      <div className="gradient">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src="../../assets/logo.jpg"
                alt="logo"
                className="rounded-circle"
                height="80"
              />
              <h1 className="display-3">{title}</h1>
              <p className="fw-normal">{subtitle}</p>

              <div className="pt-2 p-5">
                <LoginComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </main>
    </>
  );
  
};

export default LoginApp;
