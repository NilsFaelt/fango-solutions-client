export function extractFirstWordsString(inputString: string) {
  const words = inputString.split(" ");
  if (words.length <= 3) {
    return words.join(" ");
  } else {
    return words.slice(0, 3).join(" ");
  }
}
