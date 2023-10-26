import { useCallback, useMemo, useState } from "react";
import ArrowRight from "../../assets/icons/right-arrow.svg";
import EditIcon from "../../assets/icons/edit-icon.svg";
import DeleteIcon from "../../assets/icons/delete-icon.svg";
import TrashIcon from "../../assets/icons/trash-icon.svg";
import { EstablishmentTypes, useCommerce } from "../../context/commerce";
import classNames from "../../utils/className";
import InputSearch from "../Base/input-search";
import Schedules from "../Calendar";
import ModalDelete from "../modals/ModalDelete";
import ModalAddEmployee from "../modals/modalAddEmployee";

const Employees: React.FC = () => {
  const { currentCommerce } = useCommerce();
  const [value, setValue] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeSwipe, setActiveSwipe] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<
    EstablishmentTypes["employees"][0] | null
  >(null);

  const filterEmployees = useMemo(() => {
    if (value === "") {
      return currentCommerce?.employees;
    } else {
      return currentCommerce?.employees.filter((item) =>
        item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
  }, [value, currentCommerce]);

  const showCalendarComponent = useCallback(
    (employee: EstablishmentTypes["employees"][0]) => {
      setShowCalendar(true);
      setSelectedEmployee(employee);
    },
    []
  );

  return (
    <div className="w-full flex flex-col justify-around">
      {showDeleteModal && <ModalDelete title={"Funcionario"} icon={TrashIcon} setShow={setShowDeleteModal} />}
      {showAddModal && <ModalAddEmployee setShow={setShowAddModal} /> }

      <div className={classNames(showCalendar ? "hidden" : "flex flex-col")}>
        <div className="flex items-center justify-between">
          <div className="w-full">
            <InputSearch
              value={value}
              setValue={setValue}
              placeholder="Buscar profissional"
            />
          </div>

          <button onClick={() => setShowAddModal(true)} className="bg-[#738CBF] rounded-[10px] text-sm text-[#141616] font-semibold pr-[47px] pl-[30px] max-h-[42px] py-3 flex items-center ml-4 whitespace-nowrap">
            <span className="text-[25px] mr-3">+</span>
            Adicionar funcionario
          </button>
        </div>
        
        {filterEmployees?.length ? (
          <>
            <div className="flex items-center mt-4 pl-3 bg-[#F0F0F5] py-4 rounded-t-[10px]">
              {tableHead.map((item, index) => (
                <span
                  className="text-[#7E7D80] text-sm font-semibold"
                  key={index}
                  style={{ width: item.width }}
                >
                  {item.name}
                </span>
              ))}
            </div>

            <div className="flex flex-col">
              {filterEmployees.map((employee, index) => (
                <div
                  key={index}
                  className={classNames(
                    "border-b border-l border-r border-[#EBEBF0] flex items-center text-[#141616] font-semibold py-4 cursor-pointer hover:bg-[#eeebf54d]"
                  )}
                >
                  <div
                    onClick={() => showCalendarComponent(employee)}
                    className="w-full flex items-center"
                  >
                    <span className="w-[23%] pl-3">{index + 1}</span>
                    <div className="w-[35%]">
                      <img
                        src={employee.avatar_url}
                        alt="schedules_app"
                        className="w-[40px] h-[40px] rounded-full object-cover"
                      />
                    </div>
                    <span className="w-[35%]">{employee.name}</span>
                    <div className="flex w-[17%]">{employee.function}</div>
                  </div>

                  <div className="flex ml-auto mr-5">
                    <img
                      src={EditIcon}
                      alt="edit"
                      onClick={() => console.log("edit")}
                    />
                    <img
                      src={DeleteIcon}
                      alt="delete"
                      className="ml-3"
                      onClick={() => setShowDeleteModal(true)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center mt-10 h-[200px]">
            <p className="text-2xl text-[#141616] font-normal">
              Não contém nenhum profissional com esse nome!
            </p>
          </div>
        )}
      </div>

      <div
        className={classNames(
          showCalendar ? "fromTop block" : "hidden",
          activeSwipe ? "swipeScreen" : ""
        )}
      >
        <div
          onClick={() => {
            setActiveSwipe(true);
            setTimeout(() => {
              setShowCalendar(false);
              setActiveSwipe(false);
            }, 500);
          }}
          className="flex items-center w-fit rounded-[10px] bg-[#2F3A59] py-2 pl-2 pr-3 cursor-pointer"
        >
          <img src={ArrowRight} alt="" />
          <p className="text-[#fff] text-sm font-bold ml-2">
            Voltar para os profissionais
          </p>
        </div>

        <Schedules employee={selectedEmployee} />
      </div>
    </div>
  );
};

export default Employees;

const tableHead = [
  {
    name: "#",
    width: "19%",
  },
  {
    name: "Foto",
    width: "30%",
  },
  {
    name: "Nome",
    width: "30%",
  },
  {
    name: "Função",
    width: "20%",
  },
];
