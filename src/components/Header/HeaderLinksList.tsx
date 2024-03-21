import { navLinks } from "@/constants/navLinks";
import React from "react";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

function HeaderLinksList() {
  return (
    <nav>
      <ul className="flex gap-12">
        {navLinks.map((navlink) => (
          <li key={navlink.label}>
            <HeaderLink linkName={navlink.href}>{navlink.label}</HeaderLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderLinksList;
