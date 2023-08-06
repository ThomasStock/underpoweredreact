import { useLayoutEffect, useState } from "react";
import TugSvg, { svgHeight, svgWidth } from "../svg/Tug";
import { useGameStore } from "./store";

export const Tug = () => {
  const { scaledMap } = useGameStore();

  const [style, setStyle] = useState<React.CSSProperties>({});

  useLayoutEffect(() => {
    if (!scaledMap) return;

    const height = 60 * scaledMap.scale;

    const padding = 20 * scaledMap.scale;

    // Place the tug bottom
    const top = scaledMap.height - height - padding;

    const boatScale = height / svgHeight;
    const width = boatScale * svgWidth;
    const left = scaledMap.width - width - padding;

    setStyle({ top, left, height });
  }, [scaledMap?.width, scaledMap?.height]);

  return (
    <TugSvg
      className={`absolute cursor-grab select-none 
    hover:outline-dashed hover:outline-4 hover:outline-offset-2 hover:outline-cyan-600`}
      style={style}
    />
  );
};
