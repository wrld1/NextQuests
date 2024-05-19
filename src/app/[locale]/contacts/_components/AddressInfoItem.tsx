type AddressInfoItemProps = {
  label: string;
  children: React.ReactNode;
};

function AddressInfoItem({ label, children }: AddressInfoItemProps) {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-bold text-sm">{label}</p>
      <p>{children}</p>
    </div>
  );
}

export default AddressInfoItem;
