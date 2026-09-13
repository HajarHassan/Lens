import { Link } from "react-router-dom";
import { ChevronIcon } from "../shared/icons";

export default function CategoryCard({ category }) {
  const { to, icon: Icon, title, count } = category;

  return (
    <Link
      className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
      to={to}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
          <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
          {count} مقالة
        </p>
        <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
          <ChevronIcon className="w-4 h-4 text-white" />
        </div>
      </div>
    </Link>
  );
}