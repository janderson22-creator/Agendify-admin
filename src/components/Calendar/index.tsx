import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/pt-br";
import { EstablishmentTypes } from "../../context/commerce";
const localizer = momentLocalizer(moment);

const Schedules: React.FC<Props> = ({ employee }) => {

  const events = (employee?.schedules_marked || []).map((item) => ({
    title: item.name_user,
    description: item.description,
    phone_number: item.phone_number,
    service: item.service,
    start: new Date(item.start.seconds * 1000 + item.start.nanoseconds / 1000000),
    end: new Date(item.end.seconds * 1000 + item.end.nanoseconds / 1000000),
  }));

  const messages = {
    allDay: 'Dia inteiro',
    previous: 'Anterior',
    next: 'Próximo',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    date: 'Data',
    time: 'Hora',
    event: 'Evento',
  };

  return (
    <div>
      <div className="mt-7">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          style={{ height: "calc(100vh - 200px)" }}
          views={["month", "week", "day"]}
          components={{
            month: {
              event: ({ event }) => (
                <div className="event-month">
                  <div className="event-details">
                    {moment(event.start).format("HH:mm")} -{" "}
                    {moment(event.end).format("HH:mm")}
                    <div className="event-title">{event.title}</div>
                  </div>
                </div>
              ),
            },
            week: {
              event: ({ event }) => (
                <div className="event-week" onClick={() => console.log(event)}>
                  <div className="event-details">
                    {moment(event.start).format("HH:mm")} -{" "}
                    {moment(event.end).format("HH:mm")}
                    <div className="event-title">{event.title}</div>
                  </div>
                </div>
              ),
            },
            day: {
              event: ({ event }) => (
                <div className="event-day" onClick={() => console.log(event)}>
                  <div className="event-details">
                    {moment(event.start).format("HH:mm")} -{" "}
                    {moment(event.end).format("HH:mm")}
                    <div className="event-title">{event.title}</div>
                  </div>
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

// utils
interface Props {
  employee: EstablishmentTypes["employees"][0] | null;
};
