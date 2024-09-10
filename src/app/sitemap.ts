import { getAllSitemapPosts } from 'services'

export default async function sitemap() {
  const baseUrl = 'http://localhost:3000'
  const posts = await getAllSitemapPosts()

  let blogPage: { url: string; lastModified: Date }[] = []

  if (typeof posts !== 'undefined' && !('hasError' in posts)) {
    blogPage = posts.map((post) => {
      return {
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(),
        priority: 0.6
      }
    })
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8
    },
    ...blogPage
  ]
}
