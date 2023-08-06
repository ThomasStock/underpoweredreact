import { useEffect, useRef, useState } from "react";
import { useGameStore } from "./store";

export const FPS = () => {
  const { addListener } = useGameStore();
  const [text, setText] = useState("");
  const frames = useRef(0);
  const prevTime = useRef(performance.now());

  useEffect(() => {
    addListener({
      render: () => {
        const time = performance.now();
        frames.current++;
        if (time >= prevTime.current + 1000) {
          const fps = (frames.current * 1000) / (time - prevTime.current);
          setText(`${fps.toFixed(1)} FPS`);
          prevTime.current = time;
          frames.current = 0;
        }
      },
    });
  }, []);

  return <div>{text}</div>;
};
