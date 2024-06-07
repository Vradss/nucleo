import Image from "next/image";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Banner />
    </>
  );
}
