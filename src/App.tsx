// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
// Import other page components here as you create them
// e.g., import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Route for the Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* You will add other routes here later, for example:
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/lp/pet-lovers" element={<PetLandingPage />} /> 
        */}

        {/* Optional: A catch-all route for 404 Not Found pages */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;