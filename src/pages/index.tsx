import Link from "next/link";

const Home: React.FC = () => {
  return (
    <p style={{ padding: "1rem" }}>
      Please navigate to <Link href="/active-creators">/active-creators</Link>
    </p>
  );
};

export default Home;
