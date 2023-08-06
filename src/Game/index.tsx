import { useEffect, useRef } from "react";
import { useMapResize } from "./useMapResize";
import { useGameStore } from "./store";
import { Boat } from "./Boat";
import { Tug } from "./Tug";
import { useLoop } from "./useLoop";
import { FPS } from "./FPS";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";

export const Game = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { scaledMap, pixelRatio } = useGameStore();

  const { initializeLoop } = useLoop();

  useEffect(() => {
    const stopLoop = initializeLoop();
    return stopLoop;
  }, []);

  const { boxRef } = useMapResize();

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext sensors={sensors} modifiers={[restrictToParentElement]}>
      <div className="h-screen w-screen bg-yellow-300" ref={boxRef}>
        {scaledMap && (
          <>
            <div
              className="absolute inset-0 z-10 m-auto outline outline-2 outline-green-600"
              style={{ width: scaledMap.width, height: scaledMap.height }}
            >
              <Boat />
              <Tug />
            </div>
            <canvas
              ref={canvas}
              className="absolute inset-0 m-auto bg-blue-300"
              width={scaledMap.width * pixelRatio}
              height={scaledMap.height * pixelRatio}
              style={{ width: scaledMap.width, height: scaledMap.height }}
            />
            <FPS />
          </>
        )}
      </div>
    </DndContext>
  );
};
