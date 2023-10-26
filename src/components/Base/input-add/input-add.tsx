
interface Props {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const InputAdd: React.FC<Props> = ({ value, setValue, placeholder }) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      type="text"
      className="text-sm w-full rounded-lg border border-[#EBEBF0] pl-[20px] py-2.5"
    />
  );
};

export default InputAdd;
