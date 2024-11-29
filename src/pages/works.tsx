import { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

export default function Works() {
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
          src="/img/works/FinalProj.webp"
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
          src="/img/works/ReactProj.webp"
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
          src="/img/works/JSAdvanced.webp"
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
          src="/img/works/JSBasic.webp"
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
    {
      id: 4,
      img: (
        <img
          src="/img/works/portfolio1.webp"
          alt="Il mio primo portfolio in cui ho inserito i primi progetti realizzati."
          className="rounded-lg"
          loading="lazy"
        />
      ),
      title: "Primo Portfolio",
      par: "Il mio primo portfolio in cui ho inserito i primi progetti. Interamente realizzato in HTML e CSS, più qualche piccolo di Javascript.",
      gitURL:
        "https://github.com/marcellocomandulli/marcellocomandulli.github.io",
      siteURL: "https://marcellocomandulli.github.io/",
    },
    {
      id: 5,
      img: (
        <img
          src="/img/works/Hotel.webp"
          alt="Il mio primo progetto in HTML e CSS per creare il sito web di un hotel fittizio."
          className="rounded-lg"
          loading="lazy"
        />
      ),
      title: "Eco Hotel Pomelia",
      par: "Questo è stato il mio primo progetto in HTML e CSS per creare il sito web di un hotel fittizio.",
      gitURL: "https://github.com/marcellocomandulli/hotelpomelia",
      siteURL: "https://marcellocomandulli.github.io/hotelpomelia/",
    },
  ];

  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Works | Marcello Web Developer</title>
        <meta name="description" content="Here you can find all my works." />
      </Helmet>

      <Navbar />

      <h1 className="text-5xl text-center">I miei progetti</h1>

      <div className="relative">
        {activeProject !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setActiveProject(null)}
          ></div>
        )}

        <div className="flex flex-col items-center mb-4 md:flex-row md:justify-center md:flex-wrap">
          {projects.map((project) => (
            <figure
              key={project.id}
              className={`w-80 p-2 mx-5 my-7 rounded-lg shadow-lg md:w-96 md:mx-7 transition-all duration-500 ease-in-out ${
                activeProject === project.id
                  ? "fixed top-40 scale-105 md:scale-150 z-40 bg-[#ffffff] animate-zoomIn"
                  : activeProject !== null
                  ? "blur-sm"
                  : "relative md:hover:scale-110"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(
                  activeProject === project.id ? null : project.id
                );
              }}
            >
              {project.img}

              <figcaption className="p-2">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p
                  className={
                    activeProject === project.id
                      ? "line-clamp-3 overflow-y-auto"
                      : "line-clamp-3"
                  }
                >
                  {project.par}
                </p>
              </figcaption>

              {activeProject === project.id && (
                <div className="flex items-center justify-around mt-4">
                  <a href={project.gitURL}>
                    <button className="flex justify-center items-center bg-blue-500 text-white w-28 py-2 rounded-lg hover:bg-blue-700 font-semibold">
                      GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </a>
                  <a href={project.siteURL}>
                    <button className="flex justify-center items-center bg-blue-500 text-white w-28 py-2 rounded-lg hover:bg-blue-700 font-semibold">
                      Sito
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}