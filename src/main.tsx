import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import RulesPage from './pages/RulesPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
