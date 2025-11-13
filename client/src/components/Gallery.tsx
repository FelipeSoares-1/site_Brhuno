import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/hero-1.jpg", alt: "Brhuno em ação" },
    { src: "/hero-2.jpg", alt: "Brhuno com a bola" },
    { src: "/hero-3.jpg", alt: "Brhuno em movimento" },
    { src: "/1.jpg", alt: "Brhuno em destaque" },
    { src: "/2.jpg", alt: "Brhuno em campo" },
    { src: "/3.jpg", alt: "Brhuno no jogo" },
    { src: "/4.jpg", alt: "Brhuno em partida" },
    { src: "/5.jpg", alt: "Brhuno mostrando habilidade" },
    { src: "/6.jpg", alt: "Brhuno com a camisa do time" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="gallery" className="relative bg-background py-20 sm:py-32 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Galeria de <span className="text-accent">Fotos</span>
          </h2>
          <p className="text-lg text-muted-foreground">Momentos em destaque</p>
        </div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div className="relative flex-shrink-0 w-full" key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "600px" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-accent/80 p-2 text-accent-foreground transition-all hover:bg-accent hover:shadow-lg active:scale-95"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-accent/80 p-2 text-accent-foreground transition-all hover:bg-accent hover:shadow-lg active:scale-95"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-accent/40 hover:bg-accent/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
