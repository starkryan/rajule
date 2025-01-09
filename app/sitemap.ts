import { MetadataRoute } from 'next'
import { siteConfig } from './metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '#skills',
    // '#experience',
    '#projects',
    // '#blog',
    '#contact',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
