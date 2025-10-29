export const dynamic = "force-dynamic"; // always fetch fresh data

export default async function SSRPage() {
  const time = new Date().toISOString();
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <main className="p-6" style={{ background: color }}>
      <h1 className="text-2xl font-bold">Server-Side Rendering (SSR)</h1>
      <p>Generated on server: {time}</p>
    </main>
  );
}
