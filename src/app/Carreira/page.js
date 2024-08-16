import { CareerRegistration } from '@/components/Career-registration';

export default function Home() {
  return (
      <main id='/Carreira'>
        <div className="h-[4.6875rem] bg-black"></div>
        <div className="flex flex-col justify-center items-center bg-black text-white">
          <h1>Título pagina carreira</h1>
          <p>testo aqui para descrição</p>
        </div>
        <CareerRegistration />

      </main>
  );
}
