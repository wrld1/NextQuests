"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronDown, LogIn, LogOut, UserPlus } from "react-feather";

export default function AuthDropdown() {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-md bg-gray-300/20 px-4 py-2 text-md font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Увійти
            <ChevronDown
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/sign-in"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <LogIn
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        fill="#8B5CF6"
                        stroke="#C4B5FD"
                        strokeWidth="2"
                      />
                    ) : (
                      <LogIn
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        fill="#EDE9FE"
                        stroke="#A78BFA"
                        strokeWidth="2"
                      />
                    )}
                    Авторизація
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/sign-up"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <UserPlus
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        fill="#8B5CF6"
                        stroke="#C4B5FD"
                        strokeWidth="2"
                      />
                    ) : (
                      <UserPlus
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        fill="#EDE9FE"
                        stroke="#A78BFA"
                        strokeWidth="2"
                      />
                    )}
                    Реєстрація
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <LogOut
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        fill="#8B5CF6"
                        stroke="#C4B5FD"
                        strokeWidth="2"
                      />
                    ) : (
                      <LogOut
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        fill="#EDE9FE"
                        stroke="#A78BFA"
                        strokeWidth="2"
                      />
                    )}
                    Вийти
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
