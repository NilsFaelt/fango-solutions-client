import { apiClient } from "@/api";
import { auth } from "@/firebase";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const fetchContent = async (
  token: string,
  id: string | null,
  data: { title: string; text: string; todo: boolean; done: boolean }
) => {
  try {
    if (token && id) {
      const response = await fetch(
        `${apiClient(`/content/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ data }),
        })}`
      ).then((res) => res.json);
      return response;
    }
  } catch (err) {
    console.log(`couldnt patch content`, err);
  }
};

export const useMutatePatchContent = (
  token: string,
  id: string | null,
  data: { title: string; text: string; todo: boolean; done: boolean }
) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchContent(token, id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["content"]);
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (error) => {},
  });
};
