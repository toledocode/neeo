import Image from 'next/image'
import { About } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Cta } from "@/components/Cta";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { CareerRegistration } from '@/components/Career-registration';

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
        <About />
        <Services />
        <Cta />
        <Career />
        <Contact />
      </main>
  );
}
