import { useCallback, useEffect, useMemo, useState } from "react";
import ArrowRight from "../../assets/icons/right-arrow.svg";

import { useCommerce } from "../../context/commerce";
import classNames from "../../utils/className";
import InputSearch from "../Base/input-search";
import Schedules from "../Calendar";

const Employees: React.FC = () => {
  const { currentCommerce } = useCommerce();
  const [value, setValue] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeSwipe, setActiveSwipe] = useState(false);

  const filterEmployees = useMemo(() => {
    if (value === "") {
      return currentCommerce?.employees;
    } else {
      return currentCommerce?.employees.filter((item) =>
        item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    }
  }, [value, currentCommerce]);

  const showCalendarComponent = useCallback(() => {
    setShowCalendar(true);
  }, []);

  return (
    <div className="w-full flex flex-col justify-around">
      <div className={classNames(showCalendar ? "hidden" : "flex flex-col")}>
        <InputSearch
          value={value}
          setValue={setValue}
          placeholder="Buscar profissional"
        />
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
              {filterEmployees.map((employeer, index) => (
                <div
                  onClick={() => showCalendarComponent()}
                  key={index}
                  className={classNames(
                    "border-b border-l border-r border-[#EBEBF0] flex items-center text-[#141616] font-semibold py-4 cursor-pointer hover:bg-[#eeebf54d]"
                  )}
                >
                  <span className="w-[20%] pl-3">{index + 1}</span>
                  <div className="w-[30%]">
                    <img
                      src={employeer.avatar_url}
                      alt="schedules_app"
                      className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                  </div>
                  <span className="w-[30%]">{employeer.name}</span>
                  <span className="w-[20%]">{employeer.function}</span>
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

        <Schedules />
      </div>
    </div>
  );
};

export default Employees;

const tableHead = [
  {
    name: "#",
    width: "20%",
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
    width: "22%",
  },
];
