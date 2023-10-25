import { useState } from "react";
import AvatarUrlDefault from "../../../assets/img/avatar.webp";
import ImageUpload from "../../ImageUpload";
import Label from "../../Label";
import TopModal from "../../TopModal";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddEmployee: React.FC<Props> = ({ setShow }) => {
  const [image, setImage] = useState<string>("");

  return (
    <>
      <div
        onClick={() => setShow(false)}
        className="fixed w-full h-full left-0 right-0 bottom-0 top-0 m-auto bg-[#00000066] z-[1]"
      />
      <div className="h-full flex flex-col items-center fixed w-[500px] bg-[#FFF] m-auto top-0 bottom-0 right-0 z-[2] rounded-l-[10px] fromLeft">
        
        <TopModal text="Adicionar Funcionario" setShow={setShow} />

        <div className="flex w-full justify-center items-center mt-2">
          <ImageUpload
            height={170}
            width={170}
            rounded={1000}
            image={image || AvatarUrlDefault}
            setImage={setImage}
          />
        </div>

        <div className="w-full mt-10 px-5">
          <div>
            <Label text={"Nome"} />
          </div>

          <div className="mt-10">
            <Label text={"Função"} />
          </div>

          <div className="mt-10">
            <Label text={"Dias que trabalha"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddEmployee;
