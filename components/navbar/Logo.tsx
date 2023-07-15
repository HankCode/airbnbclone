"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src="/img/navlogo.png"
      height={66}
      width={85}
      alt="Logo"
      className="hidden sm:block cursor-pointer"
    />
  );
};

export default Logo;
