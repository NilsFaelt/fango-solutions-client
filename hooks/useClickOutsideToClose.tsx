import { useEffect } from "react";

export function useClickOustsideToClose(
  ref: React.MutableRefObject<HTMLInputElement>,
  setToogleMenu?: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    const handler = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target)
        if (!ref.current?.contains(target)) {
          if (setToogleMenu) setToogleMenu(false);
        }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
}
