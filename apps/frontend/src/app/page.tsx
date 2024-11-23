import LogoHome from "@/components/shared/templates/LogoHome";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
    h-screen flex flex-col justify-center items-center gap-10
    bg-[url('/background-home.svg')] bg-cover
    "
    >
      <div className="flex flex-col items-center gap-4">
        <LogoHome />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center">
          Crie e gerencie seus eventos de forma simples e eficiente.
        </p>
      </div>
      <Link href="/event" className="button blue text-lg uppercase">
        Criar novo evento
      </Link>
    </div>
  );
}
