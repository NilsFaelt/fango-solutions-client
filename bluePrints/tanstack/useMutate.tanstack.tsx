import { apiClient } from "@/api";
import { QueryClient, useMutation } from "@tanstack/react-query";

// This is just to see how you can setup
// your custom hook with tanstack.
// This is for post/mutate data

const queryClient = new QueryClient();

const mutatePokemon = async (data: { name: string }) => {
  const response = await fetch(`${apiClient}/pokemon`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return response;
};

export const useCreatePokemon = () => {
  return useMutation(mutatePokemon, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["pokemons"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
