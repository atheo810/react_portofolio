import Express from "./components/Express";
import Hero from "./components/Hero";
import Laravel from "./components/Laravel";
import Navbar from "./components/Navbar";
import ReactLib from "./components/ReactLib";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Laravel />
      <Express />
      <ReactLib />
    </>
  );
}
