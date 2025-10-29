export const revalidate = 10; // revalidate every 10 seconds

export default async function ISRPage() {
  const time = new Date().toISOString();
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  console.log("🔁 [ISR] Regenerated at:", time);

  return (
    <main className="p-6" style={{ background: color }}>
      <h1 className="text-2xl font-bold">Incremental Static Regeneration (ISR)</h1>
      <p>Generated at: {time}</p>
      <p>Revalidates every 10 seconds</p>
    </main>
  );
}
