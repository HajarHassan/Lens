import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BlogHero from "./BlogHero";
import BlogFilters from "./BlogFilters";
import BlogGrid from "./BlogGrid";
import Pagination from "./Pagination";
import { GridIcon, ListIcon } from "../shared/icons";
import postsData from "../../data/posts.json";

const ALL_ARTICLES = postsData.posts;
const ALL_CATEGORY_LABEL = "جميع المقالات";
const CATEGORIES = [ALL_CATEGORY_LABEL, ...postsData.categories.map((c) => c.name)];
const ARTICLES_PER_PAGE = 6;

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  // نشتق التصنيف الحالي من الـ URL مباشرة بدل state + useEffect
  const categoryFromUrl = searchParams.get("category");
  const activeCategory =
    categoryFromUrl && CATEGORIES.includes(categoryFromUrl)
      ? categoryFromUrl
      : ALL_CATEGORY_LABEL;

  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((article) => {
      const matchesCategory =
        activeCategory === ALL_CATEGORY_LABEL || article.category === activeCategory;
      const matchesSearch = article.title
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE));
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setCurrentPage(1);
    if (cat === ALL_CATEGORY_LABEL) {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <main className="flex-grow pt-20">
      <div className="min-h-screen bg-[#0a0a0a]">
        <BlogHero />

        <BlogFilters
          categories={CATEGORIES}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض <span className="font-bold text-white">{filteredArticles.length}</span> مقالات
            </p>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  type="button"
                  title="عرض شبكي"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <GridIcon />
                </button>
                <button
                  type="button"
                  title="عرض قائمة"
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>

          <BlogGrid articles={paginatedArticles} viewMode={viewMode} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </main>
  );
}