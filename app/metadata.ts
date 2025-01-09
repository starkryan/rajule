import type { Metadata } from 'next'

const title = 'Rohit Rayaan | Full Stack Developer | React, Next.js Expert'
const description = 'Experienced Full Stack Developer specializing in React, Next.js, Node.js & TypeScript. View my portfolio showcasing web applications, open-source projects & technical expertise.'

export const siteConfig = {
  name: "Rohit Rayaan",
  url: "https://rohitrayaan.in",
  ogImage: "https://rohitrayaan.in/og.jpg",
  description,
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  generator: 'Next.js',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Expert',
    'TypeScript Developer',
    'Node.js Developer',
    'Web Development',
    'Frontend Engineer',
    'Backend Developer',
    'JavaScript Expert',
    'Modern Web Applications',
    'UI/UX Development',
    'API Development',
    'Portfolio',
    'Rohit Rayaan',
    'Software Engineer',
  ],
  authors: [
    {
      name: "Rohit Rayaan",
      url: siteConfig.url,
    },
  ],
  creator: "Rohit Rayaan",
  publisher: "Rohit Rayaan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage],
    creator: "@rohitrayaan",
    creatorId: "rohitrayaan_",
    site: "@rohitrayaan",
  },
 
  category: 'technology',
}
