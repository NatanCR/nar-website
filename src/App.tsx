
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ParedesVerdes from "./pages/ParedesVerdes";
import JardinsPendentes from "./pages/JardinsPendentes";
import Vasos from "./pages/Vasos";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index key="home" />} />
          <Route path="/paredes-verdes" element={<ParedesVerdes />} />
          <Route path="/jardins-pendentes" element={<JardinsPendentes />} />
          <Route path="/vasos" element={<Vasos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* WhatsApp floating button - appears on all pages */}
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
