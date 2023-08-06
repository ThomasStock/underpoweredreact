import { create } from "zustand";
import { MAP_HEIGHT, MAP_WIDTH } from "./constants";
import { ScaledMap } from "./calculateCanvas";

interface GameStore {
  map: { width: number; height: number };
  scaledMap: ScaledMap | undefined;
  setScaledMap: (scaledMap: ScaledMap) => void;
  pixelRatio: number;
}

export const useGameStore = create<GameStore>((set) => ({
  map: { width: MAP_WIDTH, height: MAP_HEIGHT },
  scaledMap: { width: MAP_WIDTH, height: MAP_HEIGHT, scale: 1 },
  setScaledMap: (scaledMap: ScaledMap) => set({ scaledMap }),
  pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
}));
