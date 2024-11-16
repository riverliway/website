
/**
 * Format the remote url based on the environment
 * @param fileName - the name of the file to fetch
 * @returns the formatted remote url
 */
export const formatRemoteUrl = (fileName: string): string => {
  if (window.location.host.includes('localhost')) {
    return `http://${window.location.host}/${fileName}`
  }
  return `https://raw.githubusercontent.com/riverliway/website/refs/heads/main/v2/public/${fileName}`
}
