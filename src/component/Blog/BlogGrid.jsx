import ArticleCard from "../shared/ArticleCard";

export default function BlogGrid({ articles, viewMode = "grid" }) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-neutral-400 text-lg">لا توجد مقالات مطابقة لبحثك.</p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "flex flex-col gap-6"
      }
    >
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}