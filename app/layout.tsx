import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

// SEO and social media metadata
export const metadata: Metadata = {
  title: "Rohit Rayaan's Portfolio | Full-Stack Developer & Engineer",
  description: "Explore the portfolio of Rohit Rayaan, a full-stack developer and engineer skilled in web development, mechanical engineering, and computer science. Discover projects, experience, and contact details.",
  keywords: ["Rohit Rayaan", "Full-Stack Developer", "Web Developer", "Mechanical Engineer", "Portfolio"],
  openGraph: {
    title: "Rohit Rayaan | Full-Stack Developer & Engineer",
    description: "Showcasing the work and achievements of Rohit Rayaan in web development, engineering, and computer science.",
    url: "https://www.rohitrayaan.in/",
    siteName: "Rohit Rayaan's Portfolio",
    images: [
      {
        url: "https://www.rohitrayaan.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Rayaan's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rohitrayaan",
    title: "Rohit Rayaan | Full-Stack Developer & Engineer",
    description: "Explore the work of Rohit Rayaan, an engineer and full-stack developer with expertise in web development and mechanical engineering.",
    images: ["https://www.rohitrayaan.com/og-image.jpg"],
  },
};

// Separate viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
