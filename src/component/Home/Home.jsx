import { Link } from "react-router-dom";
import ArticleCard from "../shared/ArticleCard";
import CategoryCard from "./CategoryCard";
import NewsletterForm from "../shared/NewsletterForm";
import {
  ArrowIcon,
  InfoIcon,
  MailIcon,
  SunIcon,
  UserIcon,
  MountainIcon,
  SlidersIcon,
  CameraIcon,
  TagIcon,
} from "../shared/icons";
import postsData from "../../data/posts.json";

const FEATURED_ARTICLES = postsData.posts.filter((post) => post.featured);
const LATEST_ARTICLES = [...postsData.posts]
  .filter((post) => !post.featured)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

const CATEGORY_ICONS = {
  "إضاءة": SunIcon,
  "بورتريه": UserIcon,
  "مناظر طبيعية": MountainIcon,
  "تقنيات": SlidersIcon,
  "معدات": CameraIcon,
};

const CATEGORIES = postsData.categories.map((cat) => ({
  to: `/blog?category=${encodeURIComponent(cat.name)}`,
  icon: CATEGORY_ICONS[cat.name] || TagIcon,
  title: cat.name,
  count: cat.count,
}));

const STATS = [
  { icon: "fa-newspaper", value: `+${postsData.posts.length}`, label: "مقالة" },
  { icon: "fa-users", value: "+10ألف", label: "قارئ" },
  { icon: "fa-folder-open", value: String(postsData.categories.length), label: "تصنيفات" },
  { icon: "fa-pen-nib", value: String(new Set(postsData.posts.map((p) => p.author.name)).size), label: "كاتب" },
];

function SectionLabel({ children }) {
  return (
    <span className="section-label mb-4">
      <span className="relative flex h-2 w-2 ml-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
      </span>
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="flex-grow pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span className="text-sm font-medium text-neutral-300">مرحباً بك في عدسة</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف <span className="gradient-text">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link className="btn-primary inline-flex items-center justify-center gap-2 group" to="/blog">
                <span>استكشف المقالات</span>
                <ArrowIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link className="btn-secondary inline-flex items-center justify-center gap-2" to="/blog">
                <InfoIcon className="w-5 h-5" />
                <span>اعرف المزيد</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                  <i className={`fa-solid ${stat.icon} text-2xl text-orange-500 mb-1`} />
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-neutral-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <SectionLabel>مميز</SectionLabel>
              <h2 className="section-title text-white">مقالات مختارة</h2>
              <p className="section-subtitle max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              to="/blog"
            >
              عرض الكل
              <ArrowIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="space-y-8">
            {FEATURED_ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>التصنيفات</SectionLabel>
            <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
            <p className="section-subtitle max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {CATEGORIES.map((category) => (
              <div key={category.to} className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.125rem)]">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <SectionLabel>الأحدث</SectionLabel>
              <h2 className="section-title text-white">أحدث المقالات</h2>
              <p className="section-subtitle max-w-lg">محتوى جديد طازج من المطبعة</p>
            </div>
            <Link className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors" to="/blog">
              عرض جميع المقالات
              <ArrowIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LATEST_ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MailIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>
            <NewsletterForm layout="inline" buttonText="اشترك الآن" />
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                </div>
                <span>
                  انضم لـ <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}