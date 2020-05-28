import { useState, useEffect, useLayoutEffect } from 'react';

function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }

  function useMedia(queries, values, defaultValue) {
    // Array containing a media query list for each query
    const mediaQueryLists = queries.map(q => window.matchMedia(q));
  
    // Function that gets value based on matching media query
    const getValue = () => {
      // Get index of first media query that matches
      const index = mediaQueryLists.findIndex(mql => mql.matches);
      // Return related value or defaultValue if none
      return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    };
  
    // State and setter for matched value
    const [value, setValue] = useState(getValue);
  
    useEffect(
      () => {
        // Event listener callback
        // Note: By defining getValue outside of useEffect we ensure that it has ...
        // ... current values of hook args (as this hook callback is created once on mount).
        const handler = () => setValue(getValue);
        // Set a listener for each media query with above handler as callback.
        mediaQueryLists.forEach(mql => mql.addListener(handler));
        // Remove listeners on cleanup
        return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
      },
      [] // Empty array ensures effect is only run on mount and unmount
    );
  
    return value;
  }

  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }

  function useLockBodyScroll() {
    useLayoutEffect(() => {
     // Get original body overflow
     const originalStyle = window.getComputedStyle(document.body).overflow;  
     // Prevent scrolling on mount
     document.body.style.overflow = 'hidden';
     // Re-enable scrolling when component unmounts
     return () => document.body.style.overflow = originalStyle;
     }, []); // Empty array ensures effect is only run on mount and unmount
  }

  // function useDarkMode() {
  //   // Use our useLocalStorage hook to persist state through a page refresh.
  //   // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  //   const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');
  
  //   // See if user has set a browser or OS preference for dark mode.
  //   // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  //   const prefersDarkMode = usePrefersDarkMode();
  
  //   // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  //   // This allows user to override OS level setting on our website.
  //   const enabled =
  //     typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;
  
  //   // Fire off effect that add/removes dark mode class
  //   useEffect(
  //     () => {
  //       const className = 'dark-mode';
  //       const element = window.document.body;
  //       if (enabled) {
  //         element.classList.add(className);
  //       } else {
  //         element.classList.remove(className);
  //       }
  //     },
  //     [enabled] // Only re-call effect when value changes
  //   );
  
  //   // Return enabled state and setter
  //   return [enabled, setEnabledState];
  // }

  // Compose our useMedia hook to detect dark mode preference.
  // The API for useMedia looks a bit weird, but that's because ...
  // ... it was designed to support multiple media queries and return values.
  // Thanks to hook composition we can hide away that extra complexity!
  // Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

  export { useWindowSize, useLockBodyScroll, useLocalStorage, usePrefersDarkMode }