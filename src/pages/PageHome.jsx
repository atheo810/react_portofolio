import Express from "../components/Express";
import Hero from "../components/Hero";
import Laravel from "../components/Laravel";
import ReactLib from "../components/ReactLib";
import Vue from "../components/Vue";

export default function PageHome() {
  return (
    <div>
      <Hero />
      <Laravel />
      <Express />
      <ReactLib />
      <Vue />
    </div>
  );
}
