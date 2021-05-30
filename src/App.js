import { useState } from "react";

import Pick from "./components/Pick";
import WinnerMenu from "./components/WinnerMenu";
import Counter from "./components/Counter";
import "./css/App.css";

const App = () => {
  const [isPcikMenuVisable, setIsPickMenuVisable] = useState(true);
  const [userPick, setUserPick] = useState(null);
  const [computerPick, setComputerPick] = useState(null);
  const [isWinnerMenuVisabe, setIsWinnerMenuVisable] = useState(false);
  const [isCouterVisable, setIsCounterVisable] = useState(false);
  const [counter, setCounter] = useState(3);

  const handleClick = (user_pick = "") => {
    setIsPickMenuVisable(false);
    setUserPick(user_pick);
    pickWinner();
  };

  const pickWinner = () => {
    const ComputerPick = Math.floor(Math.random() * 2);

    //rock-0
    //paper-1
    //scissors-2
    switch (ComputerPick) {
      case 0:
        setComputerPick("rock");
        break;
      case 1:
        setComputerPick("paper");
        break;
      case 2:
        setComputerPick("scissors");
        break;
      default:
        setComputerPick("");
        break;
    }

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

  const handleClickReset = () => {
    setIsPickMenuVisable(true);
    setUserPick(null);
    setComputerPick(null);
    setIsWinnerMenuVisable(false);
    setIsCounterVisable(false);
    setCounter(3);
  };

  return (
    <main>
      {isPcikMenuVisable && <Pick click={handleClick} />}
      {isCouterVisable && <Counter counter={counter} />}
      {isWinnerMenuVisabe && (
        <WinnerMenu
          userPick={userPick}
          computerPick={computerPick}
          reset={handleClickReset}
        />
      )}
    </main>
  );
};

export default App;
