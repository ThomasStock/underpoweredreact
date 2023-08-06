import { useRef } from "react";
import { useMapResize } from "./useMapResize";
import { useGameStore } from "./store";
import { Boat } from "./Boat";
import { Tug } from "./Tug";

export const Game = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { scaledMap, pixelRatio } = useGameStore();

  const { boxRef } = useMapResize();

  return (
    <div className="w-screen h-screen bg-yellow-300" ref={boxRef}>
      {scaledMap && (
        <>
          <div
            className="m-auto absolute inset-0 outline-green-600 z-10 outline-2 outline"
            style={{ width: scaledMap.width, height: scaledMap.height }}
          >
            <Boat />
            <Tug />
          </div>
          <canvas
            ref={canvas}
            className="m-auto absolute inset-0 bg-blue-300"
            width={scaledMap.width * pixelRatio}
            height={scaledMap.height * pixelRatio}
            style={{ width: scaledMap.width, height: scaledMap.height }}
          />
        </>
      )}
    </div>
  );
};
