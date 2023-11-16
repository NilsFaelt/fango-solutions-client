import { apiClient } from "@/api";

import { useMutation } from "@tanstack/react-query";

const fetchUser = async (token: string | null) => {
  if (!token) throw new Error(" no token");
  try {
    const response = await fetch(
      `${apiClient("/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })}`
    ).then((res) => res.json);
    return response;
  } catch (err) {
    console.log(`couldnt add bookmark`);
    throw err;
  }
};

export const useMutateDeleteUser = (token: string | null) => {
  return useMutation(() => fetchUser(token), {
    onSuccess: () => {
      console.log("added user");
    },
    onError: (error) => {},
  });
};
