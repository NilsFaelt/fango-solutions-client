import { auth } from "@/firebase";
import { BookmarkInterface } from "@/types/bookmark";
import { ContentInterface } from "@/types/content";
import { useQuery } from "@tanstack/react-query";

const fetchContent = async (
  token: string,
  bookmarkId: string | null
): Promise<ContentInterface[] | null> => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://fango-api.onrender.com";
  if (!bookmarkId) return null;
  try {
    const response = await fetch(`${url}/content?bookmarkId=${bookmarkId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data as ContentInterface[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const useGetContent = (token: string, bookmarkId: string | null) => {
  return useQuery(["content", bookmarkId], () =>
    fetchContent(token, bookmarkId)
  );
};
