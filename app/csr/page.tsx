"use client";

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [time, setTime] = useState<string>("Loading...");

  useEffect(() => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = color;

    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Client-Side Rendering (CSR)</h1>
      <p>Fetched at runtime: {time}</p>
    </main>
  );
}
