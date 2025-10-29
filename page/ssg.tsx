import { GetStaticProps } from "next";

export default function SSGPage({ time }: { time: string }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Static Site Generation (SSG)</h1>
      <p>Built at: {time}</p>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { time: new Date().toISOString() },
  };
};
