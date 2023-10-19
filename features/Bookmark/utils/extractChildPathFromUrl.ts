export function extractChildPathFromURL(url: string): string {
  try {
    const encodedURL = encodeURIComponent(url);
    const urlObject = new URL(decodeURIComponent(encodedURL));

    if (urlObject.pathname && urlObject.pathname !== "/") {
      const parts = urlObject.pathname.split("/");
      if (parts.length > 1) {
        return parts.slice(1).join("/");
      }
    }

    return urlObject.hostname.replace("www.", "");
  } catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
}
