import { createAValidUrl } from "../createAValidUrl";

describe("createAValidUrl", () => {
  it("should return null for null input", () => {
    const inputURL = null;
    const result = createAValidUrl(inputURL);
    expect(result).toBeNull();
  });

  it('should return the input URL if it starts with "http://"', () => {
    const inputURL = "http://example.com";
    const result = createAValidUrl(inputURL);
    expect(result).toBe(inputURL);
  });

  it('should return the input URL if it starts with "https://"', () => {
    const inputURL = "https://example.com";
    const result = createAValidUrl(inputURL);
    expect(result).toBe(inputURL);
  });

  it('should add "https://" to the input URL if it does not start with "http://" or "https://"', () => {
    const inputURL = "example.com";
    const result = createAValidUrl(inputURL);
    expect(result).toBe("https://example.com");
  });
});
