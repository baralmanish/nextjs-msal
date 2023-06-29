"use client";

import { useEffect } from "react";

import Header from "@/common/widgets/header";
import Footer from "@/common/widgets/footer";

const Sticky = require("sticky-js");

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const stickyEls = document.querySelectorAll("[data-sticky]");
    if (stickyEls.length > 0) {
      const sticky = new Sticky("[data-sticky]");
    }
  });

  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
