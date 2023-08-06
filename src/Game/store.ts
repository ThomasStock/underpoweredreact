import { create } from "zustand";
import { MAP_HEIGHT, MAP_WIDTH } from "./constants";
import { ScaledMap } from "./calculateCanvas";
import { RenderElement } from "./useLoop";
import { immer } from "zustand/middleware/immer";

interface GameStore {
  map: { width: number; height: number };
  scaledMap: ScaledMap | undefined;
  setScaledMap: (scaledMap: ScaledMap) => void;
  pixelRatio: number;
  listeners: RenderElement[];
  addListener: (el: RenderElement) => void;
}

export const useGameStore = create<GameStore, [["zustand/immer", never]]>(
  immer((set) => ({
    map: { width: MAP_WIDTH, height: MAP_HEIGHT },
    scaledMap: { width: MAP_WIDTH, height: MAP_HEIGHT, scale: 1 },
    setScaledMap: (scaledMap: ScaledMap) => set({ scaledMap }),
    pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
    listeners: [],
    addListener: (el: RenderElement) =>
      set((state) => {
        state.listeners.push(el);
      }),
  })),
);
