interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddEmployee: React.FC<Props> = ({ setShow }) => {
  return (
    <>
      <div
        onClick={() => setShow(false)}
        className="fixed w-full h-full left-0 right-0 bottom-0 top-0 m-auto bg-[#00000066] z-[1]"
      />
      <div className="h-full flex flex-col items-center fixed w-[500px] bg-[#FFF] m-auto top-0 bottom-0 right-0 z-[2] rounded-l-[10px] fromLeft">

      </div>
    </>
  );
};

export default ModalAddEmployee;
