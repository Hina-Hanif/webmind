import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrlInput from './components/UrlInput';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';

function App() {
  const [analysisData, setAnalysisData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [url, setUrl] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState('home');

  const handleAnalyze = () => {
    // In a real app, this would call the backend API
    setLoading(true);
    setError(null);

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock data for demonstration
      const mockData = {
        visualClarity: {
          score: 78,
          insight: "Text too small on hero section"
        },
        accessibility: {
          score: 85,
          insight: "Missing alt text on images"
        },
        readability: {
          grade: 9,
          insight: "Too much technical jargon"
        },
        focusAccuracy: {
          percentage: 60,
          insight: "Users' eyes drawn away from CTA"
        },
        uxScore: {
          score: 81,
          insight: "Great layout, weak contrast"
        },
        suggestions: [
          "Increase CTA button size by 20%.",
          "Adjust color contrast to WCAG 2.1 AA standards.",
          "Simplify hero text to Grade 7 readability."
        ],
        screenshot: "https://via.placeholder.com/800x600",
        heatmapData: {
          // Mock heatmap data would go here
          url: "https://via.placeholder.com/800x600/FF5733/FFFFFF"
        }
      };

      setAnalysisData(mockData);
      setLoading(false);
    }, 2000);
  };

  const renderPage = () => {
    if (analysisData && currentPage === 'home') {
      return (
        <Dashboard
          analysisData={analysisData}
          url={url}
          onReset={() => setAnalysisData(null)}
        />
      );
    }

    switch (currentPage) {
      case 'features':
        return <Features />;
      case 'pricing':
        return <Pricing />;
      case 'about':
        return <About />;
      default:
        return (
          <>
            <Hero />
            <UrlInput
              url={url}
              setUrl={setUrl}
              onAnalyze={handleAnalyze}
              loading={loading}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#312E81] text-white">

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
export default App;
