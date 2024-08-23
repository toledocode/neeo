import Image from 'next/image'
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
      <main>
        <div className="btns-flutuantes">
          <a
              title="Fale agora com um especialista!"
              href="https://wa.me/5551991696978"
              target="_blank">
              <Image src='/Whatsapp.svg' alt="Whatsapp" width={40} height={40} />
          </a>
        </div>
        <Hero />
        <Services />
        <Career />
        <Contact />
      </main>
  );
}
