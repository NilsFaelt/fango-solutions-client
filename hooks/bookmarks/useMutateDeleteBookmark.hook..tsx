import { apiClient } from "@/api";
import { auth } from "@/firebase";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const fetchBookmark = async (token: string, id: string | null) => {
  try {
    if (token) {
      await fetch(
        `${apiClient("/bookmark", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id: id }),
        })}`
      ).then((res) => {
        console.log("succesfully deleted bookmark");
      });
    }
  } catch (err) {
    console.log(`couldnt delete bookmark`);
    throw err;
  }
};

export const useMutateDeleteBookmark = (token: string, id: string | null) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchBookmark(token, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (error) => {},
  });
};
