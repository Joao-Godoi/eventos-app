import { IEvent, IGuest } from "@/core";
import EventInfos from "./EventInfos";
import AccessByQrCode from "./AccessByQrCode";
import EventStatistics from "../shared/EventStatistics";
import GuestList from "./GuestList";

export interface IEventDashboardProps {
  event: IEvent;
  confirmedGuests: IGuest[];
  absentGuests: IGuest[];
  totalGuests: number;
}

export default function EventDashboard(props: IEventDashboardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <EventInfos event={props.event} className="flex-1" />
        <AccessByQrCode event={props.event} />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-4">
        <EventStatistics
          text="Expectativa de convidados: "
          value={props.event.limitGuests}
          image="/icons/guests.svg"
        />
        <EventStatistics
          text="Convidados confirmados: "
          value={props.confirmedGuests.length}
          image="/icons/guests-confirmed.svg"
        />
        <EventStatistics
          text="Total de convidados mais acompanhantes: "
          value={props.totalGuests}
          image="/icons/guests-company.svg"
        />
      </div>

      <button className="button blue self-end mt-12">
        Atualiza lista de convidados
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados com presença confirmada
      </span>
      <GuestList guests={props.confirmedGuests} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que não vão
      </span>
      <GuestList guests={props.absentGuests} />
    </div>
  );
}
