import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link href="/" className={`flex items-center gap-2 ${fonte.className}`}>
      <Image src="/logo.svg" width={100} height={100} alt="Logo" />
      <h1 className="flex flex-col text-lg leading-5 uppercase">
        <div>do convite</div>
        <div>à festa,</div>
        <div>sem estresse!</div>
      </h1>
    </Link>
  );
}
