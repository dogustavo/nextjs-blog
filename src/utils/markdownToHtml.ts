import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import remarkHighlightjs from 'remark-highlight.js'
import remarkParse from 'remark-parse'

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkParse)
    .use(remarkHighlightjs)
    .use(remarkHtml, { sanitize: false })
    .use(remarkGfm)
    .process(markdown)
  return result.toString()
}
