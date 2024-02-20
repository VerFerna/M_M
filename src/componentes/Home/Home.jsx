import React from "react";
import "./Home.css";
import hero_image from "../Img/logo.png";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>En Margarita Maia podras encontrar la mejor calidad de prendas confeccionadas
              o bien elegir la tela y modelo de tu preferencia para ser confeccionado.</h2>
        <div>
          <p></p>
          <p>Bienvenidos</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Home;
