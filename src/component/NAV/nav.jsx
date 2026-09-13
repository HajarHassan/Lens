import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo-GdqARQRt.png'; const NAV_LINKS = [
  { path: "/", label: "الرئيسية" },
  { path: "/blog", label: "المدونة" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link className="flex items-center gap-3 group" to="/">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                alt="Photography Logo"
                className="w-full h-full object-cover"
                src={logo}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="بحث"
              className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-linear-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 transition-all duration-300"
              to="/blog"
            >
              ابدأ القراءة
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626] mb-4">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                className="btn-primary text-sm text-center mt-2"
                to="/blog"
                onClick={() => setIsOpen(false)}
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
