type ApplicationFormInputProps = {
  inputId: string;
  inputLabel: string;
  type: string;
  required: boolean;
  placeholder: string;
};

function ApplicationFormInput({
  inputId,
  inputLabel,
  required,
  type,
  placeholder,
}: ApplicationFormInputProps) {
  return (
    <div className="flex flex-col gap-3 items-start">
      <label htmlFor={inputId}>{inputLabel}</label>
      <input
        type={type}
        id={inputId}
        name={inputId}
        required={required}
        className="py-4 px-6 bg-[#141414] border border-[#E6E6E6] w-[400px]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default ApplicationFormInput;
