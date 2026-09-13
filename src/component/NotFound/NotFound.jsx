import { Link } from "react-router-dom";
import { ArrowIcon } from "../shared/icons";

export default function NotFound() {
  return (
    <main className="flex-grow pt-20 min-h-screen bg-[#0a0a0a] relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-8xl md:text-9xl font-bold gradient-text mb-4 leading-none">404</p>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          الصفحة اللي بتدور عليها مش موجودة
        </h1>
        <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
          يمكن الرابط غلط أو الصفحة اتشالت. ارجع للصفحة الرئيسية وكمّل استكشافك.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center justify-center gap-2 group"
        >
          <ArrowIcon className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
          <span>العودة إلى الرئيسية</span>
        </Link>
      </div>
    </main>
  );
}