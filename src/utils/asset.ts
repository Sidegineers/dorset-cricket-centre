/**
 * Resolves public assets with the correct Vite base URL.
 * Works seamlessly in local dev ('/'), GitHub Pages ('/dorset-cricket-centre/'),
 * or custom domain deployments.
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  return `${cleanBase}${cleanPath}`
}
