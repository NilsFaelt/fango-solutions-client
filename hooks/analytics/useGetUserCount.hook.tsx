import { auth } from "@/firebase";
import { BookmarkInterface } from "@/types/bookmark";
import { useQuery } from "@tanstack/react-query";

const fetchUserCount = async (
  token: string
): Promise<{ users: { total: number } } | undefined> => {
  try {
    const response = await fetch(`http://localhost:3000/user/count`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data as { users: { total: number } };
  } catch (error) {
    console.error("Error fetching count:", error);
  }
};

export const useGetUserCount = (token: string) => {
  return useQuery(["userCount"], () => fetchUserCount(token));
};
