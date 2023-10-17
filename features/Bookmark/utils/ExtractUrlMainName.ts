export function extractUrlMainName(url: string | null) {
  if (!url) return null;
  try {
    const urlObject = new URL(url);
    const hostname = urlObject.hostname;

    // Remove "www." prefix if it exists
    const mainDomain = hostname.replace(/^(www\.)+/i, "");

    // Split the main domain by dots
    const hostnameParts = mainDomain.split(".");

    // Check if there are at least two parts
    if (hostnameParts.length >= 2) {
      return hostnameParts[0]; // Return the first part as the main domain
    } else {
      return mainDomain; // If there's only one part, return it as is
    }
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
