import { useState } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function Works() {
  interface Project {
    id: number;
    img: JSX.Element;
    title: string;
    par: string;
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
    },
    {
      id: 3,
      img: (
        <img
          src="/img/works/JSBasic.png"
          alt="Questo è un piccolo progetto per muovere i primi passi in JavaScript."
          className="rounded-lg"
        />
      ),
      title: "JS Basic",
      par: "Con questo progetto in JavaScript dovevo programmare un semplice contatore. Per renderlo un po' più accattivante l'ho trasformato in una tombola dove si possono estrarre i numeri evidenziandoli sul tabellone, visualizza gli ultimi 4 estratti e c'è un tasto di reset.",
    },
    {
      id: 4,
      img: (
        <img
          src="/img/works/portfolio1.png"
          alt="Il mio primo portfolio in cui ho inserito i primi progetti realizzati."
          className="rounded-lg"
        />
      ),
      title: "Primo Portfolio",
      par: "Il mio primo portfolio in cui ho inserito i primi progetti. Interamente realizzato in HTML e CSS, più qualche piccolo di Javascript.",
    },
    {
      id: 5,
      img: (
        <img
          src="/img/works/Hotel.png"
          alt="Il mio primo progetto in HTML e CSS per creare il sito web di un hotel fittizio."
          className="rounded-lg"
        />
      ),
      title: "Eco Hotel Pomelia",
      par: "Questo è stato il mio primo progetto in HTML e CSS per creare il sito web di un hotel fittizio.",
    },
  ];

  const [activeProject, setActiveProject] = useState<number | null>(null);

  console.log(activeProject);

  return (
    <>
      <Helmet>
        <title>Works | Marcello Web Developer</title>
        <meta name="description" content="Here you can find all my works." />
      </Helmet>

      <Navbar />
      <h1 className="text-4xl text-center">I miei progetti</h1>

      <div className="relative">
        {activeProject !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setActiveProject(null)}
          ></div>
        )}

        <div className="flex flex-col items-center md:flex-row md:justify-center md:flex-wrap">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`w-96 h-72 p-2 my-7 rounded-lg shadow-lg md:mx-7 transition-transform duration-500 ease-in-out ${
                activeProject === project.id
                  ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 z-40 bg-white"
                  : activeProject !== null
                  ? "blur-sm"
                  : "relative hover:scale-110"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(
                  activeProject === project.id ? null : project.id
                );
              }}
            >
              <figure>
                {project.img}
                <figcaption className="p-2">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="line-clamp-3">{project.par}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
