import { auth } from "@/firebase";
import { BookmarkInterface } from "@/types/bookmark";
import { useQuery } from "@tanstack/react-query";

const fetchBookmarks = async (
  token: string,
  pagination?: {
    limit: number | null;
    skip: number;
  }
): Promise<BookmarkInterface[] | undefined> => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://fango-api.onrender.com";
  try {
    const response = await fetch(
      `${url}/bookmark?limit=${pagination?.limit}&skip=${pagination?.skip}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data as BookmarkInterface[];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const useBookmarks = (
  token: string,
  pagination: { limit: number | null; skip: number } = {
    limit: 100,
    skip: 0,
  }
) => {
  return useQuery(["bookmarks"], () => fetchBookmarks(token, pagination));
};
