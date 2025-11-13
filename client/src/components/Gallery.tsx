import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/hero-1.jpg", alt: "Brhuno em ação" },
    { src: "/hero-2.jpg", alt: "Brhuno com a bola" },
    { src: "/hero-3.jpg", alt: "Brhuno em movimento" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section id="gallery" className="relative bg-background py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Galeria de <span className="text-accent">Fotos</span>
          </h2>
          <p className="text-lg text-muted-foreground">Momentos em destaque</p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-card/50">
          {/* Images */}
          <div className="relative h-96 w-full sm:h-[500px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-accent/80 p-2 text-accent-foreground transition-all hover:bg-accent hover:shadow-lg active:scale-95"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-accent/80 p-2 text-accent-foreground transition-all hover:bg-accent hover:shadow-lg active:scale-95"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-accent/40 hover:bg-accent/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative h-48 cursor-pointer overflow-hidden rounded-lg border transition-all ${
                index === currentIndex
                  ? "border-accent shadow-lg shadow-accent/30"
                  : "border-accent/20 hover:border-accent/50"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
