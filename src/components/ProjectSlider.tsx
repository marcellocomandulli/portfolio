import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

export default function ProjectSlider() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    centerPadding: "60px",
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
          src="/img/works/FinalProj.png"
          alt="ItalyCharge. L'app per trovare le colonnine di ricarica delle auto elettriche."
          className="rounded-lg"
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
          src="/img/works/ReactProj.png"
          alt="VegetariApp. La mia prima vera app interamente sviluppata con React.js."
          className="rounded-lg"
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
          src="/img/works/JSAdvanced.png"
          alt="Un progetto più avanzato in JavaScript con l'utilizzo di API."
          className="rounded-lg"
        />
      ),
      title: "JS Advanced",
      par: "Qui ho imparato a fare la chiamata API con JavaScript per poter stampare a schermo delle informazioni giornalistiche.",
      gitURL: "https://github.com/marcellocomandulli/hackernews",
      siteURL: "https://hacckernewss.netlify.app",
    },
  ];

  return (
    <div className="flex flex-col">
      <Slider {...settings} className="overflow-hidden">
        {projects.map((project) => (
          <figure
            key={project.id}
            className={"w-96 p-2 my-7 rounded-lg shadow-lg md:mx-16"}
          >
            {project.img}

            <figcaption className="p-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="line-clamp-2">{project.par}</p>
            </figcaption>
          </figure>
        ))}
      </Slider>
      <Link to={"/works"} className="self-end mb-3 mr-10 hover:text-blue-500">Vai ai lavori...</Link>
    </div>
  );
}
