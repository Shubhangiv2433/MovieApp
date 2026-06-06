import MovieCard from "../component/MovieCard"

const Movies = ({ movieData, favorites, toggleFavorite }) => {

  return (
    <div className="min-h-screen bg-zinc-950">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-white text-3xl font-bold mb-8">
          🎬 Movies Collection
        </h1>

        {/* MOVIE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {movieData.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              image={movie.image}
              link={movie.link}
              isFavorite={favorites.find((f) => f.id === movie.id)}
              onFavorite={() => toggleFavorite(movie)}
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default Movies