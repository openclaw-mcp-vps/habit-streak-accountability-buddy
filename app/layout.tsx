import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habit Streak — AI Accountability Buddy",
  description: "AI accountability partner for habit tracking. Daily check-ins, streak visualization, and personalized coaching to keep you on track."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ce90c6e8-896f-4784-8a73-a08bde65de1d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
