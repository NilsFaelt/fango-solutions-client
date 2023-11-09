import { auth } from "@/firebase";
import { BookmarkInterface } from "@/types/bookmark";
import { useQuery } from "@tanstack/react-query";

const fetchUserCount = async (
  token: string
): Promise<{ users: { total: number } } | undefined> => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://fango-api.onrender.com";
  try {
    const response = await fetch(`${url}/user/count`, {
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
