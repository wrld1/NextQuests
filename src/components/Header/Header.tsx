import React from "react";

import Image from "next/image";
import HeaderLinksList from "./HeaderLinksList";
import Link from "next/link";

function Header() {
  return (
    <header className="pt-6 flex bg-transparent">
      <div className="container justify-between mx-auto flex items-center gap-3">
        <div>
          <Link href="/">
            <Image
              src="/icons/Logo.svg"
              alt="Logo"
              height={0}
              width={134}
              style={{ width: "134px", height: "auto" }}
            />
          </Link>
        </div>
        <HeaderLinksList />
        <div>telephon</div>
      </div>
    </header>
  );
}

export default Header;
