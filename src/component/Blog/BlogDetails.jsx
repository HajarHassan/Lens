import { Link, useParams } from "react-router-dom";
import postsData from "../../data/posts.json";
import { ArrowIcon, ClockIcon } from "../shared/icons";

function formatArabicDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });
}

function renderContent(content) {
  const blocks = content.split("\n\n");
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} className="text-neutral-300 leading-relaxed mb-4">
        {block}
      </p>
    );
  });
}

export default function BlogDetails() {
  const { slug } = useParams();
  const post = postsData.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="flex-grow pt-32 pb-24 bg-[#0a0a0a] min-h-screen text-center">
        <p className="text-2xl text-white mb-4">المقال غير موجود</p>
        <Link to="/blog" className="text-orange-500 hover:text-orange-400 font-medium">
          العودة إلى المدونة
        </Link>
      </main>
    );
  }

  const relatedPosts = postsData.posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="flex-grow pt-20 bg-[#0a0a0a] min-h-screen">
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-500 transition-colors mb-6 text-sm"
        >
          <ArrowIcon className="w-4 h-4" />
          العودة إلى المدونة
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-sm text-neutral-400">
            <ClockIcon />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 pb-8 border-b border-[#262626] mb-8">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626]"
          />
          <div>
            <p className="text-white font-semibold">{post.author.name}</p>
            <p className="text-sm text-neutral-500">
              {post.author.role} · {formatArabicDate(post.date)}
            </p>
          </div>
        </div>

        <article className="mb-12">{renderContent(post.content)}</article>

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-16">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-[#161616] border border-[#262626] rounded-full text-sm text-neutral-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {relatedPosts.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-2xl font-bold text-white mb-6">مقالات ذات صلة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.slug}`}
                className="group block bg-[#161616] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}