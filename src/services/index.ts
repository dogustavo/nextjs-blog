export * from './blog'
export * from './tag'

export async function fetcher<T = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${input}`,
    {
      ...init,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_BASE_TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
  )

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return (await response.json()) as T
}
