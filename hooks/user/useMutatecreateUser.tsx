import { apiClient } from "@/api";

import { useMutation } from "@tanstack/react-query";

const fetchuser = async (token: string | null) => {
  console.log(" in fetch");
  if (!token) throw new Error(" no token");
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
    console.log(`couldnt add bookmark`, err);
    throw err;
  }
};

export const useMutatecreateUser = (token: string | null) => {
  console.log(" in muteate");
  return useMutation(() => fetchuser(token), {
    onSuccess: () => {
      console.log("added user");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
