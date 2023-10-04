import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/pt-br";
const localizer = momentLocalizer(moment);

// Simulação de dados de agendamento
const eventos = [
  {
    title: "Reunião com Cliente 1",
    start: new Date(2023, 9, 10, 9, 0), // Ano, Mês (0-11), Dia, Hora, Minuto
    end: new Date(2023, 9, 10, 10, 0),
  },
  {
    title: "Reunião com Cliente 2",
    start: new Date(2023, 9, 11, 14, 0),
    end: new Date(2023, 9, 11, 15, 0),
  },
  // Adicione mais eventos conforme necessário
];

const Schedules: React.FC = () => {
  return (
    <div>
      <h2>Calendário de Agendamentos</h2>
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }} // Altura do calendário
      />
    </div>
  );
};

export default Schedules;
