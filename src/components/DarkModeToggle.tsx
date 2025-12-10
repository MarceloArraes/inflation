import { useTheme } from '../contexts/ThemeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="dark-mode-toggle">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
