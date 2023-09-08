import { apiClient } from "@/api";
import { useQuery } from "@tanstack/react-query";

// This is just to see how you can setup
// your custom hook with tanstack.
// This is for fetching data

interface Response {
  id: number;
  name: string;
}
const fetchPokemon = async (params: string): Promise<Response> => {
  const data = await apiClient(`${params}`);
  return data;
};

export const useGetPokemon = (params: string) => {
  return useQuery(["pokemon"], () => fetchPokemon(params));
};
