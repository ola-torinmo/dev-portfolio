import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "portfolio | Torinmo Adebayo",
  keywords: [
    "portfolio",
    "web developer",
    "software engineer",
    "frontend developer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML",
    "CSS",
  ],
  description: "Portfolio of Torinmo Adebayo, a web developer specializing in creating elegant digital solutions.",
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
