
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Consulting = () => {
  const galleryImages = [
    "./images/painel-lateral.jpg",
    "./images/telhado-verde.jpeg",
    "./images/painel-top.jpg",
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
          Paredes verdes naturais
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Transformamos ambientes e eventos com painéis verdes naturais.
          Trabalhamos com plantas naturais selecionadas para garantir qualidade e impacto visual.
          Soluções paisagísticas eficientes, elegantes e sob medida para cada projeto.
        </p>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`consulting-${index}`}
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

export default Consulting;
