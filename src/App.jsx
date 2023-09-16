import './App.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ShowPage from './pages/show-page/ShowPage';
import MoviePage from './pages/movie-page/MoviePage';
import BookmarkPage from './pages/bookmark-page/BookmarkPage';
import Root from './pages/root/Root';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index path='/' element={<HomePage />} />
        <Route path='shows' element={<ShowPage />} />
        <Route path='movies' element={<MoviePage />} />
        <Route path='bookmark' element={<BookmarkPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
