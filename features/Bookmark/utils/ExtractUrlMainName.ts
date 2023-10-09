export function extractUrlMainName(url: string | null) {
  if (!url) return null;
  try {
    const urlObject = new URL(url);
    const hostnameParts = urlObject.hostname.split(".");
    if (hostnameParts.length >= 2) {
      return hostnameParts[1];
    } else {
      return hostnameParts[0];
    }
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
