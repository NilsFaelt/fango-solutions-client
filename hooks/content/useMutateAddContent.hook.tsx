import { apiClient } from "@/api";
import { auth } from "@/firebase";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const fetchContent = async (
  token: string,
  bookmarkId: string | null,
  data: { title: string; text: string; todo: boolean }
) => {
  try {
    if (token && bookmarkId) {
      const response = await fetch(
        `${apiClient(`/content/${bookmarkId}`, {
          method: "POST",
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
    console.log(`couldnt add content`, err);
  }
};

export const useMutateAddContent = (
  token: string,
  bookmarkId: string | null,
  data: { title: string; text: string; todo: boolean }
) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchContent(token, bookmarkId, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["content"]);
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (error) => {},
  });
};
