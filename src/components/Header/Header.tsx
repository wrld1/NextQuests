import React from "react";

import Image from "next/image";
import HeaderLinksList from "./HeaderLinksList";
import Link from "next/link";
import AuthDropdown from "./AuthDropdown";
import { verifySession } from "@/lib/api/session";
import LogoutButton from "./LogoutButton";

async function Header() {
  const session = await verifySession();

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
        <div className="flex items-center gap-8">
          <Link
            href="tel:099-145-02-67"
            className="font-semibold text-sm text-textWhite"
          >
            099-145-02-67
          </Link>
          {!session ? <AuthDropdown /> : <LogoutButton />}
        </div>
      </div>
    </header>
  );
}

export default Header;
