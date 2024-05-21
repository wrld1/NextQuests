import Link from "next/link";
import AddressInfoItem from "./_components/AddressInfoItem";
import MapWindow from "./_components/MapWindow";
import { getRandomImagePath } from "@/lib/utils/getRandomImageNames";
import React from "react";

export default async function ContactsPage() {
  const imagePath = getRandomImagePath();

  return (
    <div
      className="bg-scroll h-screen bg-cover bg-center text-textWhite "
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
    >
      <div className="pt-[122px] backdrop-blur-md h-screen">
        <section className="container mx-auto flex flex-col ">
          <span className="text-brandOrange font-medium">квести у Києві</span>
          <h2 className="text-6xl text-textWhite font-extrabold mt-1">
            Контакти
          </h2>
          <div className="pt-12 border-t-[0.5px] border-textWhite mt-7 flex items-center pl-[30px] justify-between">
            <div className="flex flex-col gap-9">
              <AddressInfoItem label="Адреса">
                <span>м. Київ, вул Хрещатик, 22</span>
              </AddressInfoItem>
              <AddressInfoItem label="Режим роботи">
                <span>Щодня з 9 до 22</span>
              </AddressInfoItem>
              <AddressInfoItem label="Телефон">
                <Link
                  href="tel:099-145-02-67"
                  className="font-semibold text-sm text-textWhite"
                >
                  099-145-02-67
                </Link>
              </AddressInfoItem>
              <AddressInfoItem label="Email">
                <Link href="mailto:info@escape-room.ua">
                  info@escape-room.ua
                </Link>
              </AddressInfoItem>
            </div>
            <MapWindow />
          </div>
        </section>
      </div>
    </div>
  );
}
