import { apiClient } from "@/api";
import { auth } from "@/firebase";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const fetchBookmark = async (
  token: string,
  bookmark: string | null,
  childUrls?: string[],
  alias?: string
) => {
  try {
    if (token && bookmark) {
      const response = await fetch(
        `${apiClient("/bookmark", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ url: bookmark, childUrls, alias }),
        })}`
      ).then((res) => res.json);
      return response;
    }
  } catch (err) {
    console.log(`couldnt add bookamrk`, err);
    throw err;
  }
};

export const useMutateAddBookmark = (
  token: string,
  bookmark: string | null,
  childUrls?: string[],
  alias?: string
) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchBookmark(token, bookmark, childUrls, alias), {
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (error) => {},
  });
};
