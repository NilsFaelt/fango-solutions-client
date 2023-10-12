import { apiClient } from "@/api";
import { auth } from "@/firebase";
import { useQuery } from "@tanstack/react-query";

const fetchBookmarks = async (
  token: string,
  pagination?: { limit: number; skip: number; page: number }
): Promise<any> => {
  console.log(token, " in query");

  try {
    const user = auth.currentUser;

    if (user) {
      const idToken = await user.getIdToken();
      const response = await fetch(
        `http://localhost:3000/bookmark?limit=${pagination?.limit}&skip=${pagination?.skip}&page=${pagination?.page}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${idToken}` },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
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
