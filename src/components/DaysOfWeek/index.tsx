import { useState } from "react";
import Arrow from "../../assets/icons/arrow-bottom.svg";
import classNames from "../../utils/className";

const DaysOfWeek = () => {
  const [daySelected, setDaySelected] = useState("");

  return (
    <div className="flex flex-col items-start rounded-t-md rounded-b-md overflow-hidden">
      {daysOfWeek.map((day, key) => (
        <div key={key} className="w-full">
          <div
            onClick={() =>
              setDaySelected(daySelected === day.title ? "" : day.title)
            }
            className={classNames(
              "flex items-center justify-between w-full px-4 py-4 cursor-pointer",
              daySelected === day.title
                ? "bg-[#738CBF] text-white"
                : "text-black bg-[#F0F0F5]"
            )}
          >
            <p className="text-sm font-medium">{day.title}</p>
            <img
              src={Arrow}
              alt="arrow_bottom"
              className={classNames(
                "transition duration-100 ease-in-out",
                daySelected === day.title ? "rotate-180" : ""
              )}
            />
          </div>

          {daySelected === day.title && (
            <div className="flex items-center justify-between border border-black px-6 py-1">
              <p>08:00</p>
              <input type="checkbox" name="" id="" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DaysOfWeek;

// utils

const daysOfWeek = [
  {
    title: "Domingo",
  },
  {
    title: "Segunda-Feira",
  },
  {
    title: "Terça-Feira",
  },
  {
    title: "Quarta-Feira",
  },
  {
    title: "Quinta-Feira",
  },
  {
    title: "Sexta-Feira",
  },
  {
    title: "Sabado",
  },
];
