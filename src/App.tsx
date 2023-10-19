import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {setCount(count + 1)}


  return (
    <div className='flex gap-3'>
      <p className='text-xl	font-bold'>hello van beo nang {count}</p>
      <button
      type="button"
      className="border"
      onClick={increase}
    >
      Tang can
    </button>
    </div>
  );
}

export default App;
