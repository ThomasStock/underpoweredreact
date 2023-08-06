import { useRef } from "react";
import { useGameStore } from "./store";

export type RenderFn = (dt: number) => void;

export type RenderElement = {
  setup?: () => Promise<unknown> | unknown;
  render: RenderFn;
};

export const useLoop = () => {
  const frame = useRef(-1);

  function render(dt: number) {
    const listeners = useGameStore.getState().listeners;
    listeners.forEach((entity) => {
      try {
        // if (entity.mounted && entity.ready) {
        entity.render(dt);
        // }
      } catch (err) {
        console.error(err);
        cancelAnimationFrame(frame.current);
        console.warn("Animation loop stopped due to an error");
      }
    });
  }

  function createLoop(fn: (dt: number) => void) {
    let lastTime = performance.now();
    (function loop() {
      frame.current = requestAnimationFrame(loop);
      const beginTime = performance.now();
      const dt = (beginTime - lastTime) / 1000;
      lastTime = beginTime;
      fn(dt);
    })();
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }

  function initializeLoop() {
    // setup entities
    // listeners.forEach(async (entity) => {
    //   if (entity.setup) {
    //     console.log("handle setup pls");
    //     // let p = entity.setup($props);
    //     // if (p && (p as Promise<unknown>).then) await p;
    //   }
    //   entity.ready = true;
    // });

    // start game loop
    return createLoop((dt) => {
      render(dt);
    });
  }

  return { initializeLoop };
};
