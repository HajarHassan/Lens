import { useState } from "react";

export default function NewsletterForm({ layout = "stacked", buttonText = "اشترك" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // TODO: اربطها بالـ API الحقيقي بتاع النشرة الإخبارية
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  const isStacked = layout === "stacked";
  const inputId = `newsletter-email-${layout}`;

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isStacked
          ? "space-y-3"
          : "flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
      }
    >
      <label htmlFor={inputId} className="sr-only">
        البريد الإلكتروني
      </label>
      <input
        id={inputId}
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="أدخل بريدك الإلكتروني"
        className={
          isStacked
            ? "w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
            : "flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
        }
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={
          isStacked
            ? "w-full btn-primary text-sm disabled:opacity-60"
            : "px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-60"
        }
      >
        {status === "submitting"
          ? "جارٍ الاشتراك..."
          : status === "success"
          ? "تم الاشتراك ✓"
          : buttonText}
      </button>
    </form>
  );
}