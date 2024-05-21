import { navLinks } from "@/constants/navLinks";
import React from "react";
import HeaderLink from "./HeaderLink";
import initTranslations from "@/app/i18n";

type HeaderLinksListProps = {
  locale: string;
};

async function HeaderLinksList({ locale }: HeaderLinksListProps) {
  const { t } = await initTranslations(locale, ["navbar"]);

  return (
    <nav>
      <ul className="flex gap-6 xl:gap-12">
        {navLinks.map(({ translateKey }) => (
          <li key={translateKey}>
            <HeaderLink linkName={translateKey}>
              {t(`${translateKey}`)}
            </HeaderLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderLinksList;
