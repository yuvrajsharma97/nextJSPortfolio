import Content from "@/components/content/page";
import Navbar from "@/components/navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>
        <Content />
      </section>
    </main>
  );
}
