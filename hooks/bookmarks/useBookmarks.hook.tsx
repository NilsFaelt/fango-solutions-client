import { auth } from "@/firebase";
import { BookmarkInterface } from "@/types/bookmark";
import { useQuery } from "@tanstack/react-query";

const fetchBookmarks = async (
  token: string,
  pagination?: {
    limit: number;
    skip: number;
    page: number;
  }
): Promise<BookmarkInterface[] | undefined> => {
  try {
    const response = await fetch(
      `http://localhost:3000/bookmark?limit=${pagination?.limit}&skip=${pagination?.skip}&page=${pagination?.page}`,
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
  pagination: { limit: number; skip: number; page: number } = {
    limit: 100,
    skip: 0,
    page: 0,
  }
) => {
  return useQuery(["bookmarks"], () => fetchBookmarks(token, pagination));
};
