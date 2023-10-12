import { apiClient } from "@/api";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient();

const mutateBookark = async (token: string, bookmark: string) => {
  const response = await fetch(`${apiClient}/bookmark`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookmark),
  }).then((res) => res.json);
  return response;
};

export const useMutateAddBookmark = (bookmark: string, token: string) => {
  return useMutation(() => mutateBookark(bookmark, token), {
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
