import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { useEffect } from 'react';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app-container" data-theme={theme}>
      <Header />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  )
}

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  ),
});