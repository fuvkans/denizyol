import React from "react";
import ItemCarousel from "../components/ItemCarousel";
import { item } from "../data/data";

export default function Home() {
  return (
    <>
      <ItemCarousel items={item} />
    </>
  );
}
