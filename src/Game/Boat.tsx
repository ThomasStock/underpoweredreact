import { useLayoutEffect, useState } from "react";
import BoatSvg from "../svg/Boat";
import { useGameStore } from "./store";

export const Boat = () => {
  const { scaledMap } = useGameStore();

  const [style, setStyle] = useState<React.CSSProperties>({});

  useLayoutEffect(() => {
    if (!scaledMap) return;

    // I want the boat to be half the canvas height
    const boatHeight = scaledMap.height / 2;

    // Place the boat in the vertical middle
    const top = scaledMap.height / 2 - boatHeight / 2;

    // Place the boat in the horizontal middle
    const boatScale = boatHeight / BoatSvg.height;
    const boatWidth = boatScale * BoatSvg.width;
    const left = scaledMap.width / 2 - boatWidth / 2;

    setStyle({ top, left, height: boatHeight });
  }, [scaledMap?.width, scaledMap?.height]);

  console.log(style);

  return <BoatSvg className="absolute" style={style} />;
};
