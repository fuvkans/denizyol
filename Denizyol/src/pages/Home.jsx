import React from "react";
import ItemCarousel from "../components/ItemCarousel";
import { item } from "../data/data";
import Slide from "../components/Slide";
import FullscreenCarousel from "../components/FullscreenCarousel";

export default function Home() {
  return (
    <>
      <FullscreenCarousel />
      <Slide item={item[1]} />
      <Slide item={item[2]} />
      <Slide item={item[3]} />
      <Slide item={item[4]} />
      <ItemCarousel items={item} />
    </>
  );
}
