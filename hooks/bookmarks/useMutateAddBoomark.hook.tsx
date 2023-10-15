import { apiClient } from "@/api";
import { auth } from "@/firebase";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const fetchBookmark = async (token: string, bookmark: string) => {
  try {
    if (token) {
      const response = await fetch(
        `${apiClient("/bookmark", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ url: bookmark }),
        })}`
      ).then((res) => res.json);
      console.log(response, " in query");
      return response;
    }
  } catch (err) {
    console.log(`couldnt add bookamrk`, err);
    throw err;
  }
};

export const useMutateAddBookmark = (token: string, bookmark: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchBookmark(token, bookmark), {
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
