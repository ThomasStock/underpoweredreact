import { useEffect, useRef } from "react";
import { MARGIN, map } from "./constants";
import calculateCanvas from "./calculateCanvas";
import { useGameStore } from "./store";
import useSize from "../packages/useSize";

export const useMapResize = () => {
  const { setScaledMap } = useGameStore();

  const boxRef = useRef<HTMLDivElement>(null);

  const boxRect = useSize(boxRef);

  useEffect(() => {
    if (!boxRect) return;

    const newMap = calculateCanvas({ map, boxRect: boxRect, margin: MARGIN });
    setScaledMap(newMap);
  }, [boxRect?.width, boxRect?.height]);

  console.log("usescaling");
  return {
    boxRef,
  };
};
