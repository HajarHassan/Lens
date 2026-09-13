import { Link } from "react-router-dom";
import { ArrowIcon, ClockIcon, StarIcon } from "./icons";

function formatArabicDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleCard({ article, featured = false }) {
  const { slug, image, category, readTime, title, excerpt, author, date } = article;
  const to = `/blog/${slug}`;
  const formattedDate = formatArabicDate(date);

  if (featured) {
    return (
      <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
        <Link className="block" to={to}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-[400px] overflow-hidden">
              <img
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                src={image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                  <StarIcon className="w-3.5 h-3.5" />
                  مميز
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                  {category}
                </span>
                <span className="flex items-center gap-1 text-sm text-neutral-500">
                  <ClockIcon />
                  {readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                {title}
              </h2>
              <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">{excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      alt={author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                      src={author.avatar}
                    />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{author.name}</p>
                    <p className="text-xs text-neutral-500">{formattedDate}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  اقرأ المقال
                  <ArrowIcon />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group card overflow-hidden">
      <Link className="block" to={to}>
        <div className="relative h-52 overflow-hidden">
          <img
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <ClockIcon />
              {readTime}
            </span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">{excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-3">
              <img
                alt={author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                src={author.avatar}
              />
              <div>
                <p className="text-sm font-medium text-white">{author.name}</p>
                <p className="text-xs text-neutral-500">{author.role}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <ArrowIcon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}