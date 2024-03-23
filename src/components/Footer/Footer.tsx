import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube } from "react-feather";

const Footer = () => {
  return (
    <footer className="flex bg-transparent text-[#707C87] shadow-lg items-start pl-8 pb-8 fixed bottom-0 w-full">
      <div className="container flex mx-auto gap-5">
        <Link
          href={"https://www.instagram.com/"}
          className="p-2 bg-[#C6C4C2] rounded-full"
        >
          <Instagram className="bg-transparent" />
        </Link>
        <Link
          href={"https://www.twitter.com/"}
          className="p-2 bg-[#C6C4C2] rounded-full"
        >
          <Twitter className="bg-transparent" />
        </Link>
        <Link
          href={"https://www.youtube.com/"}
          className="p-2 bg-[#C6C4C2] rounded-full"
        >
          <Youtube className="bg-transparent" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
