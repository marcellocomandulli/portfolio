import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

export default function ProjectSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  interface Project {
    id: number;
    img: JSX.Element;
    title: string;
    par: string;
    gitURL: string;
    siteURL: string;
  }

  const projects: Project[] = [
    {
      id: 0,
      img: (
        <img
          src="/img/works/FinalProj.jpg"
          alt="ItalyCharge. L'app per trovare le colonnine di ricarica delle auto elettriche."
          className="rounded-lg"
          loading="lazy"
        />
      ),
      title: "ItalyCharge",
      par: "Questo è stato il progetto finale del mio Master come Front End Developer su Start2Impact di cui sono molto soddisfatto.",
      gitURL: "https://github.com/marcellocomandulli/ItalyCharge",
      siteURL: "https://italycharge.netlify.app",
    },
    {
      id: 1,
      img: (
        <img
          src="/img/works/ReactProj.jpeg"
          alt="VegetariApp. La mia prima vera app interamente sviluppata con React.js."
          className="rounded-lg"
          loading="lazy"
        />
      ),
      title: "VegetariApp",
      par: "La mia prima vera app scritta interamente in React.js. Permette di cercare ricette vegetariane utilizzando le API di Spoonacular.",
      gitURL: "https://github.com/marcellocomandulli/VegetariApp",
      siteURL: "https://vegetariapp.netlify.app",
    },
    {
      id: 2,
      img: (
        <img
          src="/img/works/JSAdvanced.jpg"
          alt="Un progetto più avanzato in JavaScript con l'utilizzo di API."
          className="rounded-lg"
          loading="lazy"
        />
      ),
      title: "JS Advanced",
      par: "Qui ho imparato a fare la chiamata API con JavaScript per poter stampare a schermo delle informazioni giornalistiche.",
      gitURL: "https://github.com/marcellocomandulli/hackernews",
      siteURL: "https://hacckernewss.netlify.app",
    },
    {
      id: 3,
      img: (
        <img
          src="/img/works/JSBasic.jpg"
          alt="Questo è un piccolo progetto per muovere i primi passi in JavaScript."
          className="rounded-lg"
          loading="lazy"
        />
      ),
      title: "JS Basic",
      par: "Con questo progetto in JavaScript dovevo programmare un semplice contatore. Per renderlo un po' più accattivante l'ho trasformato in una tombola dove si possono estrarre i numeri evidenziandoli sul tabellone, visualizza gli ultimi 4 estratti e c'è un tasto di reset.",
      gitURL: "https://github.com/marcellocomandulli/bingo",
      siteURL: "https://bingocounter.netlify.app",
    },
  ];

  return (
    <div className="slider-container relative flex flex-col mx-auto mb-6 lg:w-[850px]">
      <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-8 z-10 bg-gradient-to-r from-white/90 to-transparent"></div>
      <Slider {...settings}>
        {projects.map((project) => (
          <figure key={project.id} className={"p-2 my-7 rounded-lg shadow-lg"}>
            {project.img}

            <figcaption className="p-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="line-clamp-2">{project.par}</p>
            </figcaption>
          </figure>
        ))}
      </Slider>
      <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-8 z-10 bg-gradient-to-l from-white/90 to-transparent"></div>
      <Link
        to={"/works"}
        className="hidden md:flex self-end mb-3 mr-10 justify-center items-center"
      >
        <button className="flex justify-center items-center bg-blue-500 text-white w-36 py-3 rounded-lg hover:bg-blue-700 font-semibold">
          Vai ai lavori
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
