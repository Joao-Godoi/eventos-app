import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={200} height={200} alt="Logo" />
    </Link>
  );
}
