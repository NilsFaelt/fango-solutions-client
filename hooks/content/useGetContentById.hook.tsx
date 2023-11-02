import { auth } from "@/firebase";
import { BookmarkInterface } from "@/types/bookmark";
import { ContentInterface } from "@/types/content";
import { useQuery } from "@tanstack/react-query";

const fetchContent = async (
  token: string,
  id: string | null
): Promise<ContentInterface | null> => {
  if (!id) return null;
  try {
    const response = await fetch(`http://localhost:3000/content/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    return data as ContentInterface;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const useGetContentById = (token: string, id: string | null) => {
  return useQuery(["content", id], () => fetchContent(token, id));
};
