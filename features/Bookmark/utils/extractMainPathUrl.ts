export function extractMainPathUrl(url: string | null | undefined) {
  if (!url) return null;
  try {
    const urlObject = new URL(url);
    const hostname = urlObject.hostname;

    // Remove "www." and everything after the first dot
    const mainDomain = hostname.replace(/^(www\.)?([^.]*)\..*$/, "$2");

    return mainDomain;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
