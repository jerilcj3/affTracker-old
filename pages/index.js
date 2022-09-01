import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Tailwind Configured</h1>
      <h1 className="text-3xl font-bold underline">Mongoose Configured</h1>
      <h1 className="text-3xl font-bold underline">next-connect configured</h1>
       <h1 className="text-3xl font-bold underline">Controller configured for API</h1>
    </div>
  );
}
