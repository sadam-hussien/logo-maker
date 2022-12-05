import { useRouter } from "next/router";

import Image from "next/image";

export default function Brand() {
  const router = useRouter();
  return (
    <Image
      src="/images/logo.png"
      alt="hus brand"
      width={180}
      height={140}
      className="img-fluid brand"
      onClick={() => router.push("/")}
    />
  );
}
