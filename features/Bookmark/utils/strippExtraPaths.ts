export function stripExtraPaths(url: string) {
  const urlObject = new URL(url);
  urlObject.pathname = "/"; // Set the path to the root

  return urlObject.toString();
}
