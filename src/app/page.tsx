"use client";
import Link from "next/link";
import Header from "./_components/Header";
import Upcoming from "./_components/Upcoming";
import Popular from "./_components/Popular";
import Toprated from "./_components/Toprated";

export default function Home() {
  return (
    <div>
      <Header />
      <Popular />
      <Upcoming />
      <Toprated />
    </div>
  );
}
