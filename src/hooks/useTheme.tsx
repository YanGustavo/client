import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Theme as ThemeLib} from 'lib/types/Theme';
import defaultTheme from 'styles/styled-components/theme';

interface UseThemeProps {
  theme: ThemeLib;
  setNewStoreTheme: () => Promise<ThemeLib>;
}

const useTheme = (): UseThemeProps => {
  const [theme, setTheme] = useState<ThemeLib>(defaultTheme);


  const getThemeDataFromDatabase = async (): Promise<ThemeLib | null> => {
    try {
      const response = await axios.get<ThemeLib>('http://localhost:5000/themes/slug/eaichefinho');
      return response.data;
    } catch (error) {
      console.error('Error retrieving theme data:', error);
      return null;
    }
  };

  const setNewStoreTheme = async (): Promise<ThemeLib> => {
    const themeDataFromDatabase = await getThemeDataFromDatabase();

    if (themeDataFromDatabase) {
      setTheme({
        ...defaultTheme,
        ...themeDataFromDatabase
      });
      return themeDataFromDatabase;
    }

    setTheme(defaultTheme);
    return defaultTheme;
  };

  useEffect(() => {
    setNewStoreTheme();
  }, []);

  return {
    theme,
    setNewStoreTheme
  };
};

export default useTheme;
