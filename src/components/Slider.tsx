import Marquee from "react-fast-marquee";

export default function Slider() {
  const images = [
    {
      id: 0,
      url: "./img/slider/html.png",
      alt: "HTML logo",
    },
    {
      id: 1,
      url: "./img/slider/css.png",
      alt: "CSS logo",
    },
    {
      id: 2,
      url: "./img/slider/js.png",
      alt: "JavaScript logo",
    },
    {
      id: 3,
      url: "./img/slider/git.png",
      alt: "GIT logo",
    },
    {
      id: 4,
      url: "./img/slider/react.png",
      alt: "React logo",
    },
    {
      id: 5,
      url: "./img/slider/vite.png",
      alt: "Vite logo",
    },
    {
      id: 6,
      url: "./img/slider/tailwind.png",
      alt: "Tailwind CSS logo",
    },
    {
      id: 7,
      url: "./img/slider/axios.png",
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
