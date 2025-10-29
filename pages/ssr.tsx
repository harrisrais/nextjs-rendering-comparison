import { GetServerSideProps } from "next";

export default function SSRPage({ time }: { time: string }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Server-Side Rendering (SSR)</h1>
      <p>Rendered on server: {time}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { time: new Date().toISOString() } };
};
