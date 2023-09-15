import { useEffect, useState } from "react";
import data from "./data.json";
import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home-page/HomePage";
import ShowPage from "./pages/show-page/ShowPage";
import MoviePage from "./pages/movie-page/MoviePage";
import BookmarkPage from "./pages/bookmark-page/BookmarkPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="shows" element={<ShowPage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="bookmark" element={<BookmarkPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
