import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import CPSTest from "./pages/CPSTest";
import TypingTest from "./pages/TypingTest";
import SpacebarTest from "./pages/SpacebarTest";
import ReactionTest from "./pages/ReactionTest";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import CPSGuide from "./pages/guides/CPSGuide";
import TypingGuide from "./pages/guides/TypingGuide";
import SpacebarGuide from "./pages/guides/SpacebarGuide";
import ReactionGuide from "./pages/guides/ReactionGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  useEffect(() => {
    // Set dark mode by default for gaming aesthetic
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cps-test" element={<CPSTest />} />
        <Route path="/typing-test" element={<TypingTest />} />
        <Route path="/spacebar-test" element={<SpacebarTest />} />
        <Route path="/reaction-test" element={<ReactionTest />} />
        
        {/* Guide Routes */}
        <Route path="/guides/cps" element={<CPSGuide />} />
        <Route path="/guides/typing" element={<TypingGuide />} />
        <Route path="/guides/spacebar" element={<SpacebarGuide />} />
        <Route path="/guides/reaction" element={<ReactionGuide />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        
        {/* Info Routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
