// useMediaQuery.js

import { useDebugValue, useEffect, useState } from 'react';

const useMediaQuery = ({ queryValue, initialValue }) => {
  const [match, setMatch] = useState(initialValue);

  useDebugValue(`Query: ${queryValue}`, (name) => {
    return name + ' modificado';
  });

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

export default useMediaQuery;
