import { useRef } from "react";

const useSmoothScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToRef = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return { ref, scrollToRef };
};

export default useSmoothScroll;
