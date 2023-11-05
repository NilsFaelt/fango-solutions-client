import { apiClient } from "@/api";
import { auth } from "@/firebase";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export interface ChildUrls {
  bookmarkId: string;
  createdAt: string;
  deletedAt: string | null;
  id: string;
  updatedAt: string;
  url: string;
}

const fetchBookmark = async (
  token: string,
  id: string,
  bookmark: string | null,
  childUrls?: ChildUrls[]
) => {
  console.log(token, id, bookmark, childUrls, " in hook");
  try {
    if (token && bookmark) {
      const response = await fetch(
        `${apiClient("/bookmark", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ url: bookmark, childUrls, id }),
        })}`
      ).then((res) => res.json);
      return response;
    }
  } catch (err) {
    console.log(`couldnt add bookamrk`, err);
    throw err;
  }
};

export const useMutatePatchBookmark = (
  token: string,
  id: string,
  bookmark: string | null,
  childUrls?: ChildUrls[]
) => {
  console.log(token, id, bookmark, childUrls, " in fetch");
  const queryClient = useQueryClient();
  return useMutation(() => fetchBookmark(token, id, bookmark, childUrls), {
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (error) => {},
  });
};
