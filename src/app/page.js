import Image from "next/image";

import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <div className="btns-flutuantes">
        <a
          title="Fale agora com um especialista!"
          href="https://wa.me/5551991696978"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/Whatsapp.svg" alt="Whatsapp" width={40} height={40} />
        </a>
      </div>
      <Hero />
      <Services />
      <Career />
      <Contact />
    </main>
  );
}
