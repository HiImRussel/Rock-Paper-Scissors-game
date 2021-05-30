import { useState } from "react";

import Pick from "./components/Pick";
import WinnerMenu from "./components/WinnerMenu";
import Counter from "./components/Counter";
import "./css/App.css";

const App = () => {
  const [isPcikMenuVisable, setIsPickMenuVisable] = useState(true);
  const [userPick, setUserPick] = useState(null);
  const [isWinnerMenuVisabe, setIsWinnerMenuVisable] = useState(false);
  const [isCouterVisable, setIsCounterVisable] = useState(false);
  const [counter, setCounter] = useState(3);

  const handleClick = (user_pick = "") => {
    setIsPickMenuVisable(false);
    setUserPick(user_pick);
    pickWinner();
  };

  const pickWinner = () => {
    const ComputerPick = Math.floor(Math.random() * 3) + 1;
    setIsCounterVisable(true);

    let count = 3;
    const index = setInterval(() => {
      if (count > 0) {
        setCounter((prevValue) => prevValue - 1);
        count -= 1;
      } else {
        setIsCounterVisable(false);
        setIsWinnerMenuVisable(true);
        clearInterval(index);
      }
    }, 1000);
  };

  return (
    <main>
      {isPcikMenuVisable && <Pick click={handleClick} />}
      {isCouterVisable && <Counter counter={counter} />}
      {isWinnerMenuVisabe && <WinnerMenu />}
    </main>
  );
};

export default App;
