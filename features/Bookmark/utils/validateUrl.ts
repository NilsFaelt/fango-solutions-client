export function validateUrl(url: string | null) {
  if (!url) return false;
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#]+\.[^\s]{2,}$/i;

  return urlPattern.test(url);
}
