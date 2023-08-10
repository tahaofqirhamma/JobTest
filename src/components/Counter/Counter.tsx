import React, { useEffect } from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    if (count > 99) return;
    window.addEventListener("load", () => {
      setCount((c) => c + 1);
      return () => window.removeEventListener("load", () => {});
    });
  }, [count]);
  return <div>Counter</div>;
}

export default Counter;
