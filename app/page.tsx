export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Habit Coach
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Your AI Accountability Buddy for{" "}
          <span className="text-[#58a6ff]">Unbreakable Habits</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Daily AI check-ins, streak tracking, and personalized coaching that adapts to your patterns — so you never fall off the wagon again.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["🔥", "Streak Tracking", "Visual streaks that keep you motivated"],
            ["🤖", "AI Check-ins", "Daily coaching tailored to your habits"],
            ["📈", "Smart Insights", "Patterns analysis to optimize your routine"]
          ].map(([icon, title, desc]) => (
            <div key={title as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-3xl mb-2">{icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{title}</div>
              <div className="text-xs text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited habit tracking",
              "Daily AI check-ins & coaching",
              "Streak visualization dashboard",
              "Personalized strategy adaptation",
              "Weekly progress reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the AI check-in work?",
              "Every day, our AI sends you a personalized check-in based on your habits and history. It asks how you did, celebrates wins, and helps you problem-solve when you miss a day."
            ],
            [
              "Can I track any type of habit?",
              "Yes — fitness, reading, meditation, diet, sleep, or any custom habit you define. The AI adapts its coaching style to each habit category."
            ],
            [
              "What happens if I cancel?",
              "You can cancel anytime with no questions asked. Your data remains accessible until the end of your billing period."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} Habit Streak. All rights reserved.
      </footer>
    </main>
  );
}
