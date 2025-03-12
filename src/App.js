import React, { useState } from 'react';
import './App.css';

// Sidebar Component
const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>AI Podcast</h2>
      </div>
      <div className="navigation">
        <button 
          className={`nav-button ${activePage === 'browse' ? 'active' : ''}`}
          onClick={() => setActivePage('browse')}
        >
          Browse Podcasts
        </button>
        <button 
          className={`nav-button ${activePage === 'generate' ? 'active' : ''}`}
          onClick={() => setActivePage('generate')}
        >
          Generate New Podcast
        </button>
      </div>
    </div>
  );
};

// Generate Podcast Component
const GeneratePodcast = () => {
  const [query, setQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call to generate podcast
    setTimeout(() => {
      setIsGenerating(false);
      setQuery('');
      alert('Podcast generation started! You will be notified when it is ready.');
    }, 2000);
  };
  
  return (
    <div className="generate-container">
      <h2>Generate a New Podcast</h2>
      <p>Enter a topic or question to create an AI-generated podcast</p>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="E.g., The history of jazz music, or Latest advancements in renewable energy..."
          rows={5}
          className="query-input"
        />
        
        <button 
          type="submit" 
          className="generate-button"
          disabled={isGenerating || !query.trim()}
        >
          {isGenerating ? 'Generating...' : 'Generate Podcast'}
        </button>
      </form>
    </div>
  );
};

// Browse Podcasts Component
const BrowsePodcasts = () => {
  // Mock podcast data
  const podcasts = [
    { id: 1, title: 'The Future of AI', duration: '25:43', date: '2025-03-05' },
    { id: 2, title: 'Space Exploration in 2025', duration: '32:17', date: '2025-03-01' },
    { id: 3, title: 'Climate Change Solutions', duration: '28:55', date: '2025-02-25' },
  ];
  
  return (
    <div className="browse-container">
      <h2>Browse Podcasts</h2>
      <div className="search-container">
        <input type="text" placeholder="Search podcasts..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      
      <div className="podcasts-list">
        {podcasts.map(podcast => (
          <div key={podcast.id} className="podcast-card">
            <h3>{podcast.title}</h3>
            <div className="podcast-details">
              <span>Duration: {podcast.duration}</span>
              <span>Generated on: {podcast.date}</span>
            </div>
            <div className="podcast-controls">
              <button className="play-button">Play</button>
              <button className="download-button">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [activePage, setActivePage] = useState('generate');

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="content">
        {activePage === 'generate' ? <GeneratePodcast /> : <BrowsePodcasts />}
      </main>
    </div>
  );
}

export default App;