import { useLayoutEffect, useState } from "react";
import TugSvg, { svgHeight, svgWidth } from "../svg/Tug";
import { useGameStore } from "./store";
import { useDraggable } from "@dnd-kit/core";

export const Tug = () => {
  const { scaledMap } = useGameStore();

  const { attributes, listeners, isDragging, setNodeRef, transform } =
    useDraggable({
      id: "Tug",
    });

  const [style, setStyle] = useState<{
    top: number;
    left: number;
    height?: number;
    width?: number;
  }>({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (!scaledMap) return;

    const height = 60 * scaledMap.scale;

    const padding = 20 * scaledMap.scale;

    // Place the tug bottom
    const top = scaledMap.height - height - padding;

    const boatScale = height / svgHeight;
    const width = boatScale * svgWidth;
    const left = scaledMap.width - width - padding;

    setStyle({ top, left, height, width });
  }, [scaledMap?.width, scaledMap?.height]);

  const finalStyle = {
    ...style,
    top: style.top + (transform?.y ?? 0),
    left: style.left + (transform?.x ?? 0),
  };

  return (
    <div
      className={`timing absolute cursor-grab select-none 
        ${isDragging && "scale-125 transition-transform"}`}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={finalStyle}
    >
      <TugSvg
        className={`hover:animate-wiggle ${
          isDragging && "animate-wiggle"
        } origin-top`}
      />
    </div>
  );
};
