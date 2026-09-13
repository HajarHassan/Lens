import { SearchIcon } from "../shared/icons";

export default function BlogFilters({
  categories,
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="input-dark w-full px-5 py-3 pr-12"
            />
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}