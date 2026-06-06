import { FaHeart } from "react-icons/fa"

const MovieCard = ({
  title,
  year,
  image,
  link,
  onFavorite,
  isFavorite
}) => {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg 
    transform transition-all duration-300 
    hover:scale-105 hover:-translate-y-2 
    hover:shadow-2xl hover:shadow-red-500/20 relative group">

      {/* ❤️ Favorite Heart */}
      <button
        onClick={onFavorite}
        className="absolute top-3 right-3 text-2xl z-10"
      >
        <FaHeart className={isFavorite ? "text-red-500" : "text-white"} />
      </button>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover 
          transition-transform duration-300 
          group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        <h2 className="text-white text-xl font-bold 
        transition duration-300 group-hover:text-red-400">
          {title}
        </h2>

        <p className="text-zinc-400 mt-2">
          Release Year: {year}
        </p>

        {/* Watch Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center w-full mt-4 bg-red-500 
          hover:bg-red-600 transition duration-300 
          text-white py-2 rounded-lg"
        >
          Watch Now
        </a>

      </div>

    </div>
  )
}

export default MovieCard