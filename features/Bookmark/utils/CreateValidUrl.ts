export function createValidURL(inputURL: string | null) {
  if (!inputURL) return null;
  if (inputURL.startsWith("http://") || inputURL.startsWith("https://")) {
    return inputURL;
  } else {
    return "http://" + inputURL;
  }
}
