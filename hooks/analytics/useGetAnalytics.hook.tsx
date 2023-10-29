import { auth } from "@/firebase";
import { AnalyticsInterface } from "@/types/analytics";
import { BookmarkInterface } from "@/types/bookmark";
import { ContentInterface } from "@/types/content";
import { useQuery } from "@tanstack/react-query";

const fetchAnalytics = async (
  token: string | null
): Promise<AnalyticsInterface | null> => {
  if (!token) return null;
  try {
    const response = await fetch(`http://localhost:3000/analytics`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data as AnalyticsInterface;
  } catch (error) {
    console.error("Error fetching analytucs:", error);
    return null;
  }
};

export const useGetAnalytics = (token: string | null) => {
  return useQuery(["analytics"], () => fetchAnalytics(token));
};
