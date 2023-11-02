export async function checkForFavicon(url: string | null) {
  if (!url) return "/svg/trash.svg";
  // Modify this URL to match your server's route for fetching the favicon.
  const serverProxyUrl = "/api/fetch-favicon?url=" + encodeURIComponent(url);
  return await fetch(serverProxyUrl)
    .then((response) => {
      if (response.status === 200) {
        // Favicon found, you can use it.
        return url;
      } else {
        // Favicon not found, use a default or your own favicon.
        return "/svg/trash.svg";
      }
    })
    .catch((error) => {
      console.error("Error checking for favicon:", error);
      // Handle errors here and use your default favicon.
      return "/svg/trash.svg";
    });
}
