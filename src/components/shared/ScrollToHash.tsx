"use client";

import { useEffect } from "react";

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const el = document.querySelector(hash);
  if (!el) return;
  setTimeout(() => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 150);
}

export function ScrollToHash() {
  useEffect(() => {
    scrollToHash();
  }, []);

  return null;
}
