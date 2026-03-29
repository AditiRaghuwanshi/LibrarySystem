

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full max-w-md">

      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400">
        🔍
      </span>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title or author..."
        className="w-full bg-black border border-pink-700 focus:border-pink-500 text-pink-100 placeholder-pink-500/60 text-sm rounded-full px-5 pl-11 py-3 outline-none transition-all duration-200"
      />

      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-300 text-xs font-bold transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;