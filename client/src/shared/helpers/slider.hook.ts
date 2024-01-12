import { useState } from "react";

export function useSlider(arrLength: number) {
  const [pos, setPos] = useState<number>(0);

  function next() {
    setPos((prev) => {
      if (prev === -(arrLength * 100)) {
        return -(arrLength * 100);
      }
      return prev - 100;
    });
  }

  function prev() {
    setPos((prev) => {
      if (prev === 0) {
        return 0;
      }
      return prev + 100;
    });
  }

  return {
    pos,
    prev,
    next,
  };
}
