import { useState } from "react";
import { IProduct } from "@shared/ui/product-card-sm.tsx";

export function useSlider(arr: IProduct[]) {
  const [pos, setPos] = useState<number>(0);

  function next() {
    setPos((prev) => {
      if (prev === -(arr.length - 1) * 100) {
        return -(arr.length - 1) * 100;
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
