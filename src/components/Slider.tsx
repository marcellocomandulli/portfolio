import Marquee from "react-fast-marquee";

export default function Slider() {
  const images = [
    {
      id: 0,
      url: "./img/html.webp",
      alt: "HTML logo",
    },
    {
      id: 1,
      url: "./img/css.png",
      alt: "CSS logo",
    },
    {
      id: 2,
      url: "./img/js.png",
      alt: "JavaScript logo",
    },
    {
      id: 3,
      url: "./img/git.png",
      alt: "GIT logo",
    },
    {
      id: 4,
      url: "./img/REACT.png",
      alt: "React logo",
    },
    {
      id: 5,
      url: "./img/vite.png",
      alt: "Vite logo",
    },
    {
      id: 6,
      url: "./img/tailwind.png",
      alt: "Tailwind CSS logo",
    },
    {
      id: 7,
      url: "./img/axios.png",
      alt: "Axios logo",
    },
  ];

  return (
    <>
      <div>
        <Marquee pauseOnHover={true} autoFill={true} className="h-24">
          {images.map((image) => (
            <div className="mx-5">
              <img src={image.url} alt={image.alt} className="h-20" />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
