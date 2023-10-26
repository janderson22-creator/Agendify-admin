import { useEffect, useState } from "react";
import AvatarUrlDefault from "../../../assets/img/avatar.webp";
import ImageUpload from "../../ImageUpload";
import Label from "../../Label";
import TopModal from "../../TopModal";
import InputAdd from "../../Base/input-add/input-add";
import { Employees, useCommerce } from "../../../context/commerce";
import DaysOfWeek from "../../DaysOfWeek";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddEmployee: React.FC<Props> = ({ setShow }) => {
  const [image, setImage] = useState<string>("");
  const [newEmployee, setNewEmployee] = useState<Employees>({
    avatar_url: "",
    function: "",
    name: "",
    schedules: {
      friday: [],
      monday: [],
      saturday: [],
      sunday: [],
      thursday: [],
      tuesday: [],
      wednesday: [],
    },
    schedules_marked: [],
  });

  useEffect(() => {
    if (image === "") return;
    setNewEmployee((prev) => ({ ...prev, avatar_url: image }));
  }, [image]);

  return (
    <>
      <div
        onClick={() => setShow(false)}
        className="fixed w-full h-full left-0 right-0 bottom-0 top-0 m-auto bg-[#00000066] z-[1]"
      />
      <div className="fixed w-[500px] bg-[#FFF] m-auto top-0 bottom-0 right-0 z-[2] rounded-l-[10px] fromLeft overflow-hidden">
        <TopModal text="Adicionar Funcionario" setShow={setShow} />

        <div className="h-[100%] overflow-y-auto pb-20">
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
            <div className="gap-2 flex flex-col">
              <Label text={"Nome"} />
              <InputAdd
                value={newEmployee?.name}
                setValue={(newValue) =>
                  setNewEmployee((prev) => ({
                    ...prev,
                    name: newValue as string,
                  }))
                }
                placeholder="Ex: João Maria"
              />
            </div>

            <div className="mt-10 flex flex-col gap-2">
              <Label text={"Função"} />
              <InputAdd
                value={newEmployee?.function}
                setValue={(newValue) =>
                  setNewEmployee((prev) => ({
                    ...prev,
                    function: newValue as string,
                  }))
                }
                placeholder="Ex: Barbeiro (a)"
              />
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <Label text={"Dias que trabalha"} />
              <DaysOfWeek />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddEmployee;
