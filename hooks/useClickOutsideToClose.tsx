import { useEffect } from "react";

export function useClickOustsideToClose(
  ref: React.MutableRefObject<any | null>,
  setToogle: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    const handler = (event: Event) => {
      const target = event.target as HTMLInputElement;

      console.log(target, "target");

      if (target)
        if (!ref.current?.contains(target)) {
          if (setToogle) setToogle(false);
        }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
}
