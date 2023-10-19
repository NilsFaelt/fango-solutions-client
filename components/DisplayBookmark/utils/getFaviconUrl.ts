export function getFaviconUrl(url: string) {
  try {
    const normalizedUrl = new URL(url);
    const hostname = normalizedUrl.hostname;

    // Construct the URL of the favicon
    const faviconUrl = `https://${hostname}/favicon.ico`;

    return faviconUrl;
  } catch (error) {
    // Handle invalid URLs or edge cases
    console.error("couldnt get favicon");
    return null;
  }
}

// Example usage:
