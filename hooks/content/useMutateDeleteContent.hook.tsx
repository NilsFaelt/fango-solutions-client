import { apiClient } from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchContent = async (token: string, id: string | null) => {
  try {
    if (token && id) {
      const response = await fetch(
        `${apiClient(`/content/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id }),
        })}`
      ).then((res) => res.json);
      return response;
    }
  } catch (err) {
    console.log(`couldnt delete content`);
  }
};

export const useMutateDeleteContent = (token: string, id: string | null) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchContent(token, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["content"]);
    },
    onError: (error) => {},
  });
};
