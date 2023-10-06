export const getSubdomain = () => {
    if (typeof window !== 'undefined') {
      const parts = window.location.hostname.split('.');
      return parts.length >= 3 ? parts[0] : 'eaichefinho';
    }
    return 'eaichefinho';
  };
  