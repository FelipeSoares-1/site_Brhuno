import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

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

  // Auto-play effect
  useEffect(() => {
    if (!emblaApi || isOpen) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Troca a imagem a cada 4 segundos

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, isOpen]);

  // Keyboard shortcuts para o modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowLeft") {
        emblaApi?.scrollPrev();
      } else if (e.key === "ArrowRight") {
        emblaApi?.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, emblaApi]);

  return (
    <section id="gallery" className="relative py-20 sm:py-32 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Galeria de <span className="text-accent">Fotos</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">✨ Momentos em destaque</p>
        </motion.div>

        {/* Embla Carousel */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl border border-accent/30 shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div className="relative flex-shrink-0 w-full group cursor-pointer" key={index} onClick={() => setIsOpen(true)}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ maxHeight: "600px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-accent p-3 text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/50 active:scale-95 hover:scale-110 font-bold"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-accent p-3 text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/50 active:scale-95 hover:scale-110 font-bold"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-8 h-3 bg-accent shadow-lg shadow-accent/50"
                    : "w-3 h-3 bg-accent/40 hover:bg-accent/60"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-background/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent/30">
            <p className="text-sm font-semibold text-foreground">
              {selectedIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div 
          className="mt-8 flex gap-3 overflow-x-auto pb-4 px-4 sm:px-0 sm:justify-center sm:flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => {
                emblaApi?.scrollTo(index);
                setIsOpen(true);
              }}
              className={`flex-shrink-0 rounded-lg border-2 transition-all overflow-hidden cursor-pointer ${
                index === selectedIndex
                  ? "border-accent shadow-lg shadow-accent/50"
                  : "border-accent/30 hover:border-accent/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-24 w-24 sm:h-28 sm:w-28 object-cover"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Modal para imagem em tamanho grande */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              
              {/* Botão fechar */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-8 w-8" />
              </motion.button>

              {/* Botão anterior */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  emblaApi?.scrollPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-accent p-3 text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/50"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              {/* Botão próximo */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  emblaApi?.scrollNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-accent p-3 text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/50"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>

              {/* Contador */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-background/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent/30">
                <p className="text-sm font-semibold text-foreground">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}