import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-600 opacity-30 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Content */}
      <div className="text-center z-10">

        <h1 className="text-5xl font-bold animate-pulse">
          Welcome to MovieApp 🎬
        </h1>

        <p className="text-zinc-400 mt-4 text-lg">
          Explore movies, build your favorites list & enjoy cinema vibes
        </p>

        <button
          onClick={() => navigate("/movies")}
          className="mt-8 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg transition duration-300"
        >
          Explore Movies
        </button>

      </div>

    </div>
  )
}

export default Home