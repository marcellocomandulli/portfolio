import { useEffect, useState } from "react";

export default function TextRotator(): JSX.Element {
  const presentation: string[] = [
    "Front End Developer",
    "Pilota di Droni",
    "Viaggiatore",
    "Musicista",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % presentation.length);
        setIsFadingOut(false);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [presentation.length]);

  return (
    <h2
      className={`text-3xl mt-4 transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {presentation[currentIndex]}
    </h2>
  );
}
