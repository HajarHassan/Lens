import { ChevronIcon, ChevronLeftIcon } from "../shared/icons";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const goTo = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="mt-12">
      <div className="flex justify-center items-center gap-2">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => goTo(currentPage - 1)}
          className={`p-3 rounded-xl border transition-all duration-300 ${
            currentPage === 1
              ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
          }`}
        >
          <ChevronLeftIcon />
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => goTo(page)}
              className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                page === currentPage
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                  : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => goTo(currentPage + 1)}
          className={`p-3 rounded-xl border transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
          }`}
        >
          <ChevronIcon />
        </button>
      </div>
      <p className="text-center text-neutral-500 mt-4 text-sm">
        صفحة {currentPage} من {totalPages}
      </p>
    </div>
  );
}