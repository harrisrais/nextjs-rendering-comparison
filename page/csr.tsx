import { useEffect, useState } from "react";

export default function CSRPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Client-Side Rendering (CSR)</h1>
      <p>Fetched from client: {time || "Loading..."}</p>
    </main>
  );
}
