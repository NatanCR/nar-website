
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Design = () => {
  const galleryImages = [
    "./images/vaso-arvore.jpeg",
    "./images/vaso-pequeno.JPG",
    "./images/vaso-decorativo.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </Link>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
          Vasos e arranjos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Trabalhamos com vasos decorativos pequenos, médios e grandes para ambientes internos e externos.
          Cada peça é escolhida para valorizar o espaço com elegância e naturalidade.
          Criamos decorações que equilibram estética, funcionalidade e bem-estar.
        </p>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`design-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl flex-1"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
