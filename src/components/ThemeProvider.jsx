import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themes = {
  // Renamed 'highContrast' to 'light' and adjusted its properties
  light: {
    name: 'Light', // Changed name to 'Light'
    class: 'light', // Kept class as 'light' for consistency with Tailwind
    colors: {
      primary: '#FFFF00',       // Bright Yellow (from former highContrast)
      secondary: '#000000',     // Black (from former highContrast)
      accent: '#00FF00',        // Bright Green (from former highContrast)
      background: '#000000',    // Pure Black (from former highContrast)
      text: '#FFFFFF',          // Pure White (from former highContrast)
      'muted-foreground': '#CCCCCC', // Light gray (from former highContrast)
      'primary-foreground': '#000000',
      'accent-foreground': '#000000',
      muted: '#333333',
      border: '#666666',
      card: '#111111',
      'card-foreground': '#FFFFFF',
    },
  },
  dark: {
    name: 'Dark',
    class: 'dark',
    colors: {
      primary: '#3498db',
      secondary: '#2c3e50',
      accent: '#2ecc71',
      background: '#1a1a1a',
      text: '#ecf0f1',
      'muted-foreground': '#95a5a6',
      'primary-foreground': '#ffffff',
      'accent-foreground': '#ffffff',
      muted: '#34495e',
      border: '#4a627a',
      card: '#242424',
      'card-foreground': '#ecf0f1',
    },
  },
  cyberpunk: {
    name: 'Cyberpunk',
    class: 'cyberpunk',
    colors: {
      primary: '#00FFFF',
      secondary: '#FF00FF',
      accent: '#FFD700',
      background: '#1a0d2e',
      text: '#00FF00',
      'muted-foreground': '#9933FF',
      'primary-foreground': '#000000',
      'accent-foreground': '#000000',
      muted: '#330066',
      border: '#6600FF',
      card: '#220a3a',
      'card-foreground': '#00FFFF',
    },
  },
  // Removed the old 'highContrast' theme as it's been moved to 'light'
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark'); // Default to dark

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    // Ensure savedTheme exists AND is one of the NEWLY defined themes
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    } else if (savedTheme === 'highContrast') { // Handle legacy saved 'highContrast'
      setCurrentTheme('light'); // Map old 'highContrast' to new 'light'
    } else {
      setCurrentTheme('dark'); // Default if no valid saved theme
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme];
    
    // Remove all existing theme classes first to ensure clean switch
    // This now iterates over the new 'themes' object's values
    Object.values(themes).forEach(t => document.documentElement.classList.remove(t.class));
    // Add the new theme class
    document.documentElement.classList.add(theme.class);
    
    localStorage.setItem('portfolio-theme', currentTheme);

    // Update CSS custom properties
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });
  }, [currentTheme]); // Dependency array: re-run when currentTheme changes

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    } else {
      console.warn(`Attempted to switch to unknown theme: "${themeName}". Available themes: ${Object.keys(themes).join(', ')}`);
    }
  };

  const value = {
    currentTheme,
    themes,
    switchTheme,
    theme: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;