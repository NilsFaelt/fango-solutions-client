import { auth } from "@/firebase";
import { useEffect, useState } from "react";

const getToken = async (user: any) => {
  try {
    if (user) {
      const idToken = await user.getIdToken();
      return idToken;
    } else {
      throw new Error("User is not authenticated.");
    }
  } catch (err) {
    return null;
  }
};

export const useIdToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      getToken(user).then((idToken) => {
        if (idToken) {
          setToken(idToken);
        } else {
          setError("Could not retrieve ID token.");
        }
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { token, error };
};
