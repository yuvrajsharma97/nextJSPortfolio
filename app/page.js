import Content from "@/components/content.jsx/page";
import Navbar from "@/components/navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="z-50">
        <Navbar />
      </section>
      <section>
        <Content />
      </section>
    </main>
  );
}
