import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Theme as ThemeLib } from 'lib/types/Theme';
import defaultTheme from 'styles/styled-components/theme';
import { getSubdomain } from '../functions/get-subdomain';

interface UseThemeProps {
  theme: ThemeLib;
  setNewStoreTheme: () => Promise<ThemeLib>;
}

const useTheme = (): UseThemeProps => {
  const [theme, setTheme] = useState<ThemeLib>(defaultTheme);
  const [subdomain, setSubdomain] = useState<string>('');

  const getThemeDataFromDatabase = async (): Promise<ThemeLib | null> => {
    console.log("subdominio"+subdomain);
    try {
      const response = await axios.get<ThemeLib>(`http://localhost:5000/themes/slug/eaichefinho`);
      return response.data;
    } catch (error) {
      console.error('Error retrieving theme data:', error);
      return null;
    }
  };

  const setNewStoreTheme = async (): Promise<ThemeLib> => {
    const newSubdomain = getSubdomain();

    // Verifique se o subdomínio mudou
    if (newSubdomain !== subdomain) {
      setSubdomain(newSubdomain);
      const themeDataFromDatabase = await getThemeDataFromDatabase();

      if (themeDataFromDatabase) {
        setTheme({
          ...defaultTheme,
          ...themeDataFromDatabase,
        });
        return themeDataFromDatabase;
      }
    }

    return theme; // Retorna o tema atual se o subdomínio não mudar
  };

  useEffect(() => {
    setNewStoreTheme();
  }, []);

  return {
    theme,
    setNewStoreTheme,
  };
};

export default useTheme;
