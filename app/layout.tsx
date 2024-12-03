import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importing custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO metadata
export const metadata: Metadata = {
  title: "Rohit Rayaan's Portfolio | Full-Stack Developer",
  description:
    "Explore the portfolio of Rohit Rayaan, a full-stack developer skilled in web development and engineering.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rohit Rayaan",
              jobTitle: "Full-Stack Developer",
              url: "https://www.rohitrayaan.in",
              image: "https://www.rohitrayaan.in/og-image.jpg",
              sameAs: [
                "https://www.instagram.com/rohitrayaan/",
                "https://github.com/starkryan",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
