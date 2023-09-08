const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.myproductiondomain.com"
    : "https://pokeapi.co/api/v2/pokemon/";

export const apiClient = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${endpoint}: ${response.statusText}`);
  }

  return response.json();
};
