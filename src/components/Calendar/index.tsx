import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/pt-br";

const localizer = momentLocalizer(moment);

// Simulação de dados de agendamento
const eventos = [
  {
    name: "Janderson Costa",
    service: "Corte degradê 20$",
    name_employee: "Janderson costa Barbeiro",
    start: new Date(2023, 9, 10, 9, 0),
    end: new Date(2023, 9, 10, 10, 0),
  },
  {
    name: "Rodolfo",
    start: new Date(2023, 9, 10, 14, 0),
    end: new Date(2023, 9, 10, 15, 0),
  },
  {
    name: "Mathias",
    start: new Date(2023, 9, 11, 14, 0),
    end: new Date(2023, 9, 11, 15, 0),
  },
  {
    name: "Denis",
    start: new Date(2023, 9, 12, 10, 0),
    end: new Date(2023, 9, 12, 11, 0),
  },
  // Adicione mais eventos conforme necessário
];

// Função para agrupar eventos por dia e contar quantos eventos têm em cada dia
function agruparEventosPorDia(eventos: any[]) {
  const eventosPorDia: Record<string, any[]> = {};
  eventos.forEach((evento) => {
    const data = moment(evento.start).format("YYYY-MM-DD");
    if (!eventosPorDia[data]) {
      eventosPorDia[data] = [];
    }
    eventosPorDia[data].push(evento);
  });
  return eventosPorDia;
}

const Schedules: React.FC = () => {
  return (
    <div>
      <div className="mt-7">
        <h2>Calendário de Agendamentos</h2>
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor={(evento) => new Date(evento.start)}
          endAccessor={(evento) => new Date(evento.end)}
          style={{ height: "calc(100vh - 200px)" }}
          views={["month", "week", "day"]}
          components={{
            month: {
              event: ({ event }) => (
                <div className="event-month" onClick={() => console.log(event)}>
                  <div className="event-details">
                    {moment(event.start).format("HH:mm")} -{" "}
                    {moment(event.end).format("HH:mm")}
                  </div>
                </div>
              ),
            },
            week: {
              event: ({ event }) => (
                <div className="event-week">
                  <div className="event-title">{/* {event.title} */}</div>
                </div>
              ),
            },
            day: {
              event: ({ event }) => (
                <div className="event-day">
                  <div className="event-title">{/* {event.title} */}</div>
                </div>
              ),
            },
          }}
        />
      </div>
    </div>
  );
};

export default Schedules;
