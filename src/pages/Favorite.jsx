import MovieCard from "../component/MovieCard"

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-white text-4xl font-bold mb-8">
        Favorite Movies
      </h1>

      {favorites.length === 0 ? (
        <p className="text-zinc-400">
          No favorite movies yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              image={movie.image}
              link={movie.link}
              isFavorite={true}
              onFavorite={() => toggleFavorite(movie)}
            />
          ))}

        </div>
      )}

    </div>
  )
}

export default Favorites