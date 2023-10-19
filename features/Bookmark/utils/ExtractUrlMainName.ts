export function extractUrlMainName(url: string | null) {
  if (!url) return null;
  try {
    const urlObject = new URL(url);
    const hostname = urlObject.hostname;

    const mainDomain = hostname.replace(/^(www\.)+/i, "");

    const hostnameParts = mainDomain.split(".");

    if (hostnameParts.length >= 2) {
      return hostnameParts[0];
    } else {
      return mainDomain;
    }
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
