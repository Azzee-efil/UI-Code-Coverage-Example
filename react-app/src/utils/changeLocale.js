export function getLocaleFromUrl() {
    const hash = window.location.hash.slice(1); 
    const locales = ['en', 'ua', 'fr'];
    
    if (locales.includes(hash)) {
      return hash;
    }
  
    return 'en';
  }
  