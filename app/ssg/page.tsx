export const dynamic = "force-static"; // build once only

export default function SSGPage() {
  const time = new Date().toISOString();
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <main className="p-6" style={{ background: color }}>
      <h1 className="text-2xl font-bold">Static Site Generation (SSG)</h1>
      <p>Built at: {time}</p>
    </main>
  );
}
