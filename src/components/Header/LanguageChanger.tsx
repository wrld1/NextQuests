"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "@/i18nConfig";
import { ChevronDown, Check } from "react-feather";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function LanguageChanger() {
  const [selected, setSelected] = useState("uk");
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (locale: string) => {
    const newLocale = locale;
    setSelected(locale);

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <Listbox value={currentLocale} onChange={handleChange}>
      <div className="relative">
        <Listbox.Button className="inline-flex gap-4 w-16 items-center justify-start rounded-md bg-gray-300/20 px-4 py-2 text-md font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <span className="block truncate">{currentLocale}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {i18nConfig.locales.map((lang) => (
              <Listbox.Option
                key={lang}
                className={({ active }) =>
                  `${
                    active ? "bg-brandOrange text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`
                }
                value={lang}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`truncate flex gap-1  ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {lang}
                      {selected && <Check />}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
