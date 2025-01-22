"use client";
import Link from "next/link";
import Header from "./_components/Header";
import Upcoming from "./_components/Upcoming";
import Popular from "./_components/Popular";
import Toprated from "./_components/Toprated";
import Footer from "./_components/Footer";
import { CarouselSize } from "./Cover";

export default function Home() {
  return (
    <div className="">
      <Header />
      <CarouselSize />
      <Popular />
      <Upcoming />
      <Toprated />
      <Footer />
    </div>
  );
}
