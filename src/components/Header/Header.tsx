import React from "react";

import Image from "next/image";
import HeaderLinksList from "./HeaderLinksList";
import Link from "next/link";

function Header() {
  return (
    <header className="pt-6 flex bg-transparent absolute w-full z-20">
      <div className="container justify-between mx-auto flex items-center gap-3">
        <div>
          <Link href="/">
            <Image
              src="/icons/Logo.svg"
              alt="Logo"
              width={0}
              height={0}
              className="w-[134px] h-auto"
            />
          </Link>
        </div>
        <HeaderLinksList />
        <Link
          href="tel:099-145-02-67"
          className="font-semibold text-sm text-textWhite"
        >
          099-145-02-67
        </Link>
      </div>
    </header>
  );
}

export default Header;
