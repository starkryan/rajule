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

// SEO and social media metadata
export const metadata: Metadata = {
  title: "Rohit Rayaan's Portfolio | Full-Stack Developer & Engineer",
  description:
    "Explore the portfolio of Rohit Rayaan, a full-stack developer and engineer skilled in web development, mechanical engineering, and computer science.",
  keywords: [
    "Rohit Rayaan",
    "Full-Stack Developer",
    "Web Developer",
    "Mechanical Engineer",
    "Portfolio",
    "JavaScript",
    "React Developer",
    "Node.js",
    "Next.js Developer",
    "TypeScript",
    "GraphQL",
    "Web Development",
    "Engineering Portfolio",
    "Tech Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "UI/UX Design",
    "Machine Learning",
    "Artificial Intelligence",
    "Python Developer",
    "Cloud Computing",
    "Mobile App Development",
  ],
  openGraph: {
    title: "Rohit Rayaan | Full-Stack Developer & Engineer",
    description:
      "Showcasing the work and achievements of Rohit Rayaan in web development, engineering, and computer science.",
    url: "https://www.rohitrayaan.in",
    siteName: "Rohit Rayaan",
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
    description:
      "Explore the work of Rohit Rayaan, an engineer and full-stack developer with expertise in web development and mechanical engineering.",
    images: ["https://www.rohitrayaan.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  // Structured Data (JSON-LD) for better SEO and rich results
  other: [
    {
      type: "application/ld+json",
      content: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rohit Rayaan",
          "jobTitle": "Full-Stack Developer & Engineer",
          "url": "https://www.rohitrayaan.in",
          "image": "https://www.rohitrayaan.in/og-image.jpg",
          "sameAs": [
            "https://www.instagram.com/rohitrayaan/",
            "https://github.com/starkryan",
          ],
          "description":
            "A skilled full-stack developer and mechanical engineer specializing in web development, computer science, and engineering.",
          "additionalType": "http://schema.org/Person",
          "mainEntityOfPage": "https://www.rohitrayaan.in",
        },
      ]),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
