import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube } from "react-feather";

const Footer = () => {
  return (
    <footer className="flex bg-transparent text-[#707C87] shadow-lg items-start pl-8 pb-8">
      <div className="container flex mx-auto gap-5">
        <Link href={"https://www.instagram.com/"}>
          <Instagram />
        </Link>
        <Link href={"https://www.twitter.com/"}>
          <Twitter />
        </Link>
        <Link href={"https://www.youtube.com/"}>
          <Youtube />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
