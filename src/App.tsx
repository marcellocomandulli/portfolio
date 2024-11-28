import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Works from "./pages/works";
import Footer from "./components/Footer";

export default function App() {

    return (
      <>
        <div>
          <Helmet>
            <title>Home | Marcello Web Developer</title>
            <meta name="description" content="Home of my portfolio." />
          </Helmet>

          <Navbar />
          <div className="flex items-center justify-around">
            <div>
              <h1 className="text-5xl">Marcello</h1>
              <h2 className="text-3xl">Front End Developer</h2>
            </div>

            <img
              src="./img/profile.JPG"
              alt="Immagine profilo"
              className="rounded-full md:h-80 shadow-xl"
            />
          </div>

          <Slider />

          <div>
            progettoni
           
          </div>

          <Footer></Footer>
        </div>
      </>
    );
  };

