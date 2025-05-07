
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/blog/BlogPost";

// Blog category pages
import IELTSPreparation from "./pages/blog/categories/IELTSPreparation";
import StudyAbroad from "./pages/blog/categories/StudyAbroad";
import LanguageLearning from "./pages/blog/categories/LanguageLearning";
import JobOpportunities from "./pages/blog/categories/JobOpportunities";
import KolhapurUpdates from "./pages/blog/categories/KolhapurUpdates";

// Country pages
import Germany from "./pages/jobs/countries/Germany";
import Norway from "./pages/jobs/countries/Norway";
import France from "./pages/jobs/countries/France";
import Italy from "./pages/jobs/countries/Italy";
import Ireland from "./pages/jobs/countries/Ireland";
import UK from "./pages/jobs/countries/UK";
import Spain from "./pages/jobs/countries/Spain";
import Netherlands from "./pages/jobs/countries/Netherlands";
import Sweden from "./pages/jobs/countries/Sweden";
import Poland from "./pages/jobs/countries/Poland";

// Google Analytics
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

// Google Analytics tracking component
const GoogleAnalytics = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page views on route change
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-GT8FNG7Q2J', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/jobs" element={<Jobs />} />
              {/* Country specific job pages */}
              <Route path="/jobs/work-in-germany" element={<Germany />} />
              <Route path="/jobs/work-in-norway" element={<Norway />} />
              <Route path="/jobs/work-in-france" element={<France />} />
              <Route path="/jobs/work-in-italy" element={<Italy />} />
              <Route path="/jobs/work-in-ireland" element={<Ireland />} />
              <Route path="/jobs/work-in-uk" element={<UK />} />
              <Route path="/jobs/work-in-spain" element={<Spain />} />
              <Route path="/jobs/work-in-netherlands" element={<Netherlands />} />
              <Route path="/jobs/work-in-sweden" element={<Sweden />} />
              <Route path="/jobs/work-in-poland" element={<Poland />} />
              
              {/* Blog routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
              
              {/* Blog category routes */}
              <Route path="/blog/ielts-preparation" element={<IELTSPreparation />} />
              <Route path="/blog/study-abroad" element={<StudyAbroad />} />
              <Route path="/blog/language-learning" element={<LanguageLearning />} />
              <Route path="/blog/job-opportunities" element={<JobOpportunities />} />
              <Route path="/blog/kolhapur-updates" element={<KolhapurUpdates />} />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

// TypeScript definitions for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default App;
