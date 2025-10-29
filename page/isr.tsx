import { GetStaticProps } from "next";

export default function ISRPage({ time }: { time: string }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Incremental Static Regeneration (ISR)</h1>
      <p>Generated at: {time}</p>
      <p>Revalidates every 10 seconds</p>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const now = new Date().toISOString();
  console.log("🔁 [ISR] Page regenerated at:", now);

  return {
    props: { time: now },
    revalidate: 10, // Rebuild page every 10s
  };
};
