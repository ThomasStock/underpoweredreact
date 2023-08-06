import "./App.css";
import { Game } from "./Game";
import { useGameStore } from "./Game/store";

function App() {
  const {
    map: { height, width },
    scaledMap,
    pixelRatio,
  } = useGameStore();

  return (
    <>
      <Game />
      <div className="fixed bottom-0 z-50 bg-white opacity-50">
        <div>
          map: {height}/{width}
        </div>
        <div>
          scaled: {scaledMap?.height}/{scaledMap?.width}
        </div>
        <div>scale: {scaledMap?.scale}</div>
        <div>pixelRatio: {pixelRatio}</div>
      </div>
    </>
  );
}

export default App;
