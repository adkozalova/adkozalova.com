import React, {useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => () => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [location, history]);

  return null;
}