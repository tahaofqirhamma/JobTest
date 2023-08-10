import React from "react";
import Parallex from "./components/Parallex/Parallex";
import Stats from "./components/Stats/Stats";
import About from "./pages/About/About";
import Blogs from "./pages/Blog/Blogs";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
// import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

function App() {
  const [, setStop] = React.useState(false);

  window.addEventListener("load", () => setStop(true));
  return (
    <>
      {/* <Loading stop={stop} /> */}
      <Home />
      <Services />
      <About />
      <Stats />
      <Portfolio />
      <Parallex />
      <Blogs />
      <Footer />
    </>
  );
}

export function Counter({ stop }: { stop: boolean }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (count > 99) return;
    const id = setInterval(() => setCount((c) => c + 1), stop ? 10 : 100);
    return () => clearInterval(id);
  }, [count, stop]);
  return <div> {count}% </div>;
}

export default App;
