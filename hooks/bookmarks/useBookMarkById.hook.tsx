import { auth } from "@/firebase";
import { BookmarkInterface } from "@/types/bookmark";
import { useQuery } from "@tanstack/react-query";

const fetchBookmark = async (
  token: string,
  id: string | null
): Promise<BookmarkInterface | null> => {
  if (!id) return null;
  try {
    const response = await fetch(`http://localhost:3000/bookmark/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data as BookmarkInterface;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const useBookMarkById = (token: string, id: string | null) => {
  return useQuery(["bookmark", id], () => fetchBookmark(token, id));
};
