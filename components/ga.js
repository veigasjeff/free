import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-K8QKRZ4B44'); // Replace with your Google Analytics tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
