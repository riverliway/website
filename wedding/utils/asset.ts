const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/riverliway/website/main/wedding/public'

const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

export const asset = (src: string): string => {
  if (isLocalhost) {
    return `/${src}`
  }
  return `${GITHUB_RAW_BASE}/${src}`
}
