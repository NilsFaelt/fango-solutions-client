import { auth } from "@/firebase";
import { useEffect, useState } from "react";

const getToken = async () => {
  try {
    const user = auth.currentUser;

    if (user) {
      const idToken = await user.getIdToken();
      return idToken;
    } else {
      throw new Error("User is not authenticated.");
    }
  } catch (err) {
    console.log("Could not retrieve ID token:", err);
    return null;
  }
};

export const useIdToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getToken().then((idToken) => {
      if (idToken) {
        setToken(idToken);
      } else {
        setError("Could not retrieve ID token.");
      }
    });
  }, []);

  return { token, error };
};
