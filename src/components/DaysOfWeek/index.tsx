import { useEffect, useState } from "react";
import Arrow from "../../assets/icons/arrow-bottom.svg";
import classNames from "../../utils/className";
import { Employees } from "../../context/commerce";

interface Props {
  setNewEmployee: React.Dispatch<React.SetStateAction<Employees>>;
}

const DaysOfWeek: React.FC<Props> = ({ setNewEmployee }) => {
  const [daySelected, setDaySelected] = useState("");
  const [selectedHours, setSelectedHours] = useState<SelectedHours>({});
  const [daysOfWeek, setDaysOfWeek] = useState([
    {
      title: "Domingo",
      hours: [
        {
          time: "08:00",
          checked: false,
        },
        {
          time: "09:00",
          checked: false,
        },
        {
          time: "10:00",
          checked: false,
        },
        {
          time: "11:00",
          checked: false,
        },
        {
          time: "12:00",
          checked: false,
        },
        {
          time: "13:00",
          checked: false,
        },
        {
          time: "14:00",
          checked: false,
        },
        {
          time: "15:00",
          checked: false,
        },
        {
          time: "16:00",
          checked: false,
        },
        {
          time: "17:00",
          checked: false,
        },
        {
          time: "18:00",
          checked: false,
        },
        {
          time: "19:00",
          checked: false,
        },
        {
          time: "20:00",
          checked: false,
        },
      ],
    },
    {
      title: "Segunda-Feira",
      hours: [
        {
          time: "08:00",
          checked: false,
        },
        {
          time: "09:00",
          checked: false,
        },
        {
          time: "10:00",
          checked: false,
        },
        {
          time: "11:00",
          checked: false,
        },
        {
          time: "12:00",
          checked: false,
        },
        {
          time: "13:00",
          checked: false,
        },
        {
          time: "14:00",
          checked: false,
        },
        {
          time: "15:00",
          checked: false,
        },
        {
          time: "16:00",
          checked: false,
        },
        {
          time: "17:00",
          checked: false,
        },
        {
          time: "18:00",
          checked: false,
        },
        {
          time: "19:00",
          checked: false,
        },
        {
          time: "20:00",
          checked: false,
        },
      ],
    },
    {
      title: "Terça-Feira",
      hours: [
        {
          time: "08:00",
          checked: false,
        },
        {
          time: "09:00",
          checked: false,
        },
        {
          time: "10:00",
          checked: false,
        },
        {
          time: "11:00",
          checked: false,
        },
        {
          time: "12:00",
          checked: false,
        },
        {
          time: "13:00",
          checked: false,
        },
        {
          time: "14:00",
          checked: false,
        },
        {
          time: "15:00",
          checked: false,
        },
        {
          time: "16:00",
          checked: false,
        },
        {
          time: "17:00",
          checked: false,
        },
        {
          time: "18:00",
          checked: false,
        },
        {
          time: "19:00",
          checked: false,
        },
        {
          time: "20:00",
          checked: false,
        },
      ],
    },
    {
      title: "Quarta-Feira",
      hours: [
        {
          time: "08:00",
          checked: false,
        },
        {
          time: "09:00",
          checked: false,
        },
        {
          time: "10:00",
          checked: false,
        },
        {
          time: "11:00",
          checked: false,
        },
        {
          time: "12:00",
          checked: false,
        },
        {
          time: "13:00",
          checked: false,
        },
        {
          time: "14:00",
          checked: false,
        },
        {
          time: "15:00",
          checked: false,
        },
        {
          time: "16:00",
          checked: false,
        },
        {
          time: "17:00",
          checked: false,
        },
        {
          time: "18:00",
          checked: false,
        },
        {
          time: "19:00",
          checked: false,
        },
        {
          time: "20:00",
          checked: false,
        },
      ],
    },
    {
      title: "Quinta-Feira",
      hours: [
        {
          time: "08:00",
          checked: false,
        },
        {
          time: "09:00",
          checked: false,
        },
        {
          time: "10:00",
          checked: false,
        },
        {
          time: "11:00",
          checked: false,
        },
        {
          time: "12:00",
          checked: false,
        },
        {
          time: "13:00",
          checked: false,
        },
        {
          time: "14:00",
          checked: false,
        },
        {
          time: "15:00",
          checked: false,
        },
        {
          time: "16:00",
          checked: false,
        },
        {
          time: "17:00",
          checked: false,
        },
        {
          time: "18:00",
          checked: false,
        },
        {
          time: "19:00",
          checked: false,
        },
        {
          time: "20:00",
          checked: false,
        },
      ],
    },
    {
      title: "Sexta-Feira",
      hours: [
        {
          time: "08:00",
          checked: false,
        },
        {
          time: "09:00",
          checked: false,
        },
        {
          time: "10:00",
          checked: false,
        },
        {
          time: "11:00",
          checked: false,
        },
        {
          time: "12:00",
          checked: false,
        },
        {
          time: "13:00",
          checked: false,
        },
        {
          time: "14:00",
          checked: false,
        },
        {
          time: "15:00",
          checked: false,
        },
        {
          time: "16:00",
          checked: false,
        },
        {
          time: "17:00",
          checked: false,
        },
        {
          time: "18:00",
          checked: false,
        },
        {
          time: "19:00",
          checked: false,
        },
        {
          time: "20:00",
          checked: false,
        },
      ],
    },
    {
      title: "Sabado",
      hours: [
        {
          time: "08:00",
          checked: false,
        },
        {
          time: "09:00",
          checked: false,
        },
        {
          time: "10:00",
          checked: false,
        },
        {
          time: "11:00",
          checked: false,
        },
        {
          time: "12:00",
          checked: false,
        },
        {
          time: "13:00",
          checked: false,
        },
        {
          time: "14:00",
          checked: false,
        },
        {
          time: "15:00",
          checked: false,
        },
        {
          time: "16:00",
          checked: false,
        },
        {
          time: "17:00",
          checked: false,
        },
        {
          time: "18:00",
          checked: false,
        },
        {
          time: "19:00",
          checked: false,
        },
        {
          time: "20:00",
          checked: false,
        },
      ],
    },
  ]);

  const toggleHour = (
    day: string,
    hour: string,
    dayIndex: number,
    hourIndex: number
  ) => {
    const updatedDaysOfWeek = [...daysOfWeek];
    updatedDaysOfWeek[dayIndex].hours[hourIndex].checked =
      !updatedDaysOfWeek[dayIndex].hours[hourIndex].checked;
    setDaysOfWeek(updatedDaysOfWeek);

    setSelectedHours((prevSelectedHours) => {
      const isHourSelected = prevSelectedHours[day]?.includes(hour);
      if (isHourSelected) {
        const updatedHours = prevSelectedHours[day].filter(
          (selectedHour) => selectedHour !== hour
        );
        return { ...prevSelectedHours, [day]: updatedHours };
      } else {
        return {
          ...prevSelectedHours,
          [day]: [...(prevSelectedHours[day] || []), hour],
        };
      }
    });
  };

  const confirmation = () => {
    setNewEmployee((prev) => ({
      ...prev,
      schedules: {
        sunday: selectedHours["Domingo"] || [],
        monday: selectedHours["Segunda-Feira"] || [],
        tuesday: selectedHours["Terça-Feira"] || [],
        wednesday: selectedHours["Quarta-Feira"] || [],
        thursday: selectedHours["Quinta-Feira"] || [],
        friday: selectedHours["Sexta-Feira"] || [],
        saturday: selectedHours["Sabado"] || [],
      },
    }));
  };

  return (
    <div>
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

            {daySelected === day.title &&
              day.hours.map((hour, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-l border-r border-t px-6 py-1 first-of-type:border-t-none"
                >
                  <p
                    className={classNames(
                      "font-medium",
                      hour.checked
                        ? "text-[#25DD37]"
                        : "opacity-75 text-[#ff0000]"
                    )}
                  >
                    {hour.time}
                  </p>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={hour.checked}
                    onChange={() =>
                      toggleHour(day.title, hour.time, key, index)
                    }
                  />
                </div>
              ))}
          </div>
        ))}
      </div>

      <button
        onClick={confirmation}
        className="w-full bg-[#738CBF] rounded-[10px] text-sm text-[#141616] font-semibold pr-[47px] pl-[30px] max-h-[px] py-3 flex items-center justify-center whitespace-nowrap mt-10"
      >
        Adicionar funcionario
      </button>
    </div>
  );
};

export default DaysOfWeek;

// utils

type SelectedHours = {
  [day: string]: string[];
};
