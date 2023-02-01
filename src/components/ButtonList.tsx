import { useState } from 'react'

const ButtonList = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  return (
    <>
      <button
        className={activeButtonIndex === 0 ? "bg-white" : "bg-black"}
        onClick={() => setActiveButtonIndex(0)}
      >
        My Button
      </button>
      <button
        className={activeButtonIndex === 1 ? "bg-white" : "bg-black"}
        onClick={() => setActiveButtonIndex(1)}
      >
        My Button
      </button>
      <button
        className={activeButtonIndex === 2 ? "bg-white" : "bg-black"}
        onClick={() => setActiveButtonIndex(2)}
      >
        My Button
      </button>
    </>
  );
};

export default ButtonList