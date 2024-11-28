import { useEffect, useState } from "react";

export default function TextRotator(): JSX.Element {
  const presentation: string[] = [
    "Front End Developer",
    "Pilota di Droni",
    "Viaggiatore",
    "Musicista",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % presentation.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [presentation.length]);

  return (
    <>
      <h2 className="text-3xl mt-4">{presentation[currentIndex]}</h2>
    </>
  );
}
