import { useState } from "react";

import Pick from "./components/Pick";
import "./css/App.css";

const App = () => {
  const [isPcikMenuVisable, setIsPickMenuVisable] = useState(true);

  const handleClick = () => {
    setIsPickMenuVisable(false);
  };

  return (
    <main>
      <p>App</p>
      {isPcikMenuVisable && <Pick click={handleClick} />}
    </main>
  );
};

export default App;
