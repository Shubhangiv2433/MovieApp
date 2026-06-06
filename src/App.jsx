import { useState, useEffect } from 'react'
import './css/style.css'

import toast, { Toaster } from 'react-hot-toast'

import Navbar from './component/Navbar'
import Favorites from './pages/Favorite'
import Movies from './pages/Movies' 
import Home from './pages/Home'

import { Routes, Route } from 'react-router-dom'

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

function App() {

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })

  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
  const query = search.trim() === "" ? "dark" : search;
  const debouncedSearchTerm = useDebounce(query, 500);

  useEffect(() => {

    fetch(`https://www.omdbapi.com/?s=${debouncedSearchTerm}&apikey=44777d44`)
      .then((res) => res.json())
      .then((data) => {

        if (data.Response === "True") {

          const formattedMovies = data.Search.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
            link: `https://www.imdb.com/title/${movie.imdbID}`,
          }));

          setMovieData(formattedMovies);

        } else {

          setMovieData([]);

        }

      });

  }, [debouncedSearchTerm]);

  // Save favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  // Toggle Favorite
  const toggleFavorite = (movie) => {

    const isExist = favorites.find((item) => item.id === movie.id)

    if (isExist) {
      setFavorites(favorites.filter((item) => item.id !== movie.id))
      toast.error(`${movie.title} removed`)
    } else {
      setFavorites([...favorites, movie])
      toast.success(`${movie.title} added`)
    }
  }

  return (
    <div className="bg-zinc-950 min-h-screen">

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1000,
          style: {
            background: "#18181b",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
          },
        }}
      />

      {/* ✅ FIXED NAVBAR CONNECTION */}
      <Navbar search={search} setSearch={setSearch} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/movies"
          element={
            <Movies
              movieData={movieData}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

      </Routes>

    </div>
  )
}

export default App