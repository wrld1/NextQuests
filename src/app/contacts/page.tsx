import AddressInfoItem from "./_components/AddressInfoItem";

export default async function ContactsPage() {
  return (
    <>
      <section className="container mx-auto mt-12 pt-[74px] flex flex-col">
        <span className="text-brandOrange font-medium">квести у Києві</span>
        <h2 className="text-6xl text-textWhite font-extrabold mt-1">
          Контакти
        </h2>
        <div className="pt-12 border-t-[0.5px] border-textWhite mt-7 flex items-center">
          <div className="flex flex-col gap-9">
            <AddressInfoItem label="Адреса">
              <span>м. Київ, вул Хрещатик, 22</span>
            </AddressInfoItem>
            <AddressInfoItem label="Режим роботи">
              <span>Щодня з 9 до 22</span>
            </AddressInfoItem>
            <AddressInfoItem label="Телефон">
              <span>8 (800) 333-55-99</span>
            </AddressInfoItem>
          </div>
        </div>
      </section>
    </>
  );
}
