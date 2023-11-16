import { apiClient } from "@/api";
import { useMutation } from "@tanstack/react-query";

const fetchuser = async (token: string | null) => {
  if (!token) return null;
  try {
    const response = await fetch(
      `${apiClient("/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })}`
    ).then((res) => res.json);
    return response;
  } catch (err) {
    return null;
  }
};

export const useMutatecreateUser = (token: string | null) => {
  return useMutation(() => fetchuser(token), {
    onSuccess: (data) => {
      if (data) {
        console.log("added user");
      } else {
        console.error("not set");
      }
    },
  });
};
