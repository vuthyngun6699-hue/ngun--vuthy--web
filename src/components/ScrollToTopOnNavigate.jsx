import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

// Scrolls the window to the top whenever the route changes,
// mimicking a fresh page load for each of the site's pages.
// Also refreshes AOS so newly-mounted sections get their scroll animations.
export default function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    // Wait a tick for the new page's DOM to mount before AOS re-scans it.
    const id = setTimeout(() => AOS.refreshHard(), 50);
    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}
