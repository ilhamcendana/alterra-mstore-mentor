import { useState } from "react";
import "./App.css";
import Picker from "./components/Picker";
import Result from "./components/Result";

function App() {
  const [myChoice, myChoiceSet] = useState(null);
  const [opponentChoice, opponentChoiceSet] = useState(null);

  function generateOpponentPicks() {
    const randomNumber = Math.random();
    const picks = randomNumber > 0.7 ? "batu" : randomNumber > 0.3 ? "gunting" : "kertas";
    return picks;
  }

  function onPlayerChoosed(val) {
      myChoiceSet(val);
      opponentChoiceSet(generateOpponentPicks());
  }

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Result myChoice={myChoice} opponentChoice={opponentChoice} />
        <div className="flex gap-4 justify-center">
          <Picker
            value="batu"
            label="Batu"
            onClick={() => onPlayerChoosed("batu")}
          />
          <Picker
            value="gunting"
            label="Gunting"
            onClick={() => onPlayerChoosed("gunting")}
          />
          <Picker
            value="kertas"
            label="Kertas"
            onClick={() => onPlayerChoosed("kertas")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
