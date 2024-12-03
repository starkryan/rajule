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
    index: "index",
    follow: "follow",
  },
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
        <title>Rohit Rayaan | Full-Stack Developer & Engineer</title>
        <meta name="description" content="Explore the portfolio of Rohit Rayaan, a full-stack developer and engineer skilled in web development, mechanical engineering, and computer science." />
        <meta name="keywords" content="Rohit Rayaan, Full-Stack Developer, Web Developer, Mechanical Engineer, Portfolio, JavaScript, React Developer, Node.js, Next.js Developer, TypeScript, GraphQL, Web Development, Engineering Portfolio, Tech Portfolio, Frontend Developer, Backend Developer, Software Engineer, UI/UX Design, Machine Learning, Artificial Intelligence, Python Developer, Cloud Computing, Mobile App Development" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Rohit Rayaan | Full-Stack Developer & Engineer" />
        <meta property="og:description" content="Showcasing the work and achievements of Rohit Rayaan in web development, engineering, and computer science." />
        <meta property="og:url" content="https://www.rohitrayaan.in" />
        <meta property="og:site_name" content="Rohit Rayaan" />
        <meta property="og:image" content="https://www.rohitrayaan.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rohitrayaan" />
        <meta name="twitter:title" content="Rohit Rayaan | Full-Stack Developer & Engineer" />
        <meta name="twitter:description" content="Explore the work of Rohit Rayaan, an engineer and full-stack developer with expertise in web development and mechanical engineering." />
        <meta name="twitter:image" content="https://www.rohitrayaan.in/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rohit Rayaan",
              jobTitle: "Full-Stack Developer & Engineer",
              url: "https://www.rohitrayaan.in",
              image: "https://www.rohitrayaan.in/og-image.jpg",
              sameAs: [
                "https://www.instagram.com/rohitrayaan/",
                "https://github.com/starkryan",
              ],
              description:
                "A skilled full-stack developer and mechanical engineer specializing in web development, computer science, and engineering.",
              additionalType: "http://schema.org/Person",
              mainEntityOfPage: "https://www.rohitrayaan.in",
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
