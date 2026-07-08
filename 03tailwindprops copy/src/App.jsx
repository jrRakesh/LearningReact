import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardDefault } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CardDefault
        title="Winter Love"
        text="I love winter. It's the most beautiful season of the year. I love the white creamy snows falling in bits from the sky"
      />
       <CardDefault
        title="Summer Love"
        text="Summer is also one of the most beautiful seasons of the year. We get a lot of fruits to eat. Greenery shows up everywhere"
      />
    </>
  );
}

export default App;
