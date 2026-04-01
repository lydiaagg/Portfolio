import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react"
import ReactGA from "react-ga4";

// Init Google Analytics
ReactGA.initialize("G-Q5FMY1S14Z");

// Track pageview
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Home />
      <SpeedInsights />
    </HelmetProvider>
  </StrictMode>
);
