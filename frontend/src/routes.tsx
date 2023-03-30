import MovieCollection from './pages/MovieCollection';
import Podcasts from './pages/Podcasts';
import App from './App';
import { useRoutes } from 'react-router-dom';

const Urls = () => {
  const routes = useRoutes([
    { path: '/', element: <App /> },
    { path: 'movies', element: <MovieCollection /> },
    { path: 'podcasts', element: <Podcasts /> },
  ]);
  return routes;
};

export default Urls;
