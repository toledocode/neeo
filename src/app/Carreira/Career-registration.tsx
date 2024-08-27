import { ProfileRegistrationForm } from "@/components/profile-resgistration-form";

export function CareerRegistration() {
  return (
    <section className="pt-[4.6875rem] bg-[--gray-800]">
      <div className="bg-[--gray-900]">
        <div className="w-full flex justify-center items-center flex-col py-20">
          <p className="text-xl font-medium text-[--pink-500] text-center pb-4">
            #weareneeo
          </p>
          <div className="pb-10">
            <h1 className="font-bold text-5xl text-center text-white">
              Faça parte do{" "}
              <span className="text-[--blue-300]">nosso time!</span>
            </h1>
          </div>
          <p className="text-base font-medium text-[--gray-400] text-center pb-5 w-[785px]">
            Acreditamos que a tecnologia começa com pessoas, e aqui valorizamos
            nossos colaboradores. Junte-se a nós para criar soluções
            desafiadoras e crescer nas principais tecnologias do mercado.
          </p>
        </div>
      </div>

      <main className="flex justify-center items-center flex-col bg-[--gray-800] max-w-4xl m-auto py-10 container dark">
        <ProfileRegistrationForm />
      </main>
    </section>
  );
}
