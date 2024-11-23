"use client";
import EventDashboard from "@/components/event/EventDashboard";
import PasswordEventForm from "@/components/event/PasswordEventForm";
import { mockEvents, IEvent, IGuest } from "core";
import { use, useCallback, useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function EventAdminPage(props: any) {
  const params: any = use(props.params);

  const id = params.all[0];
  const [event, setEvent] = useState<IEvent | null>(null);
  const [password] = useState<string | null>(params.all[1] ?? null);

  const confirmedGuests =
    event?.guests.filter((guest) => guest.confirmed) ?? [];
  const absentGuests = event?.guests.filter((guest) => !guest.confirmed) ?? [];
  const totalGuests =
    confirmedGuests.reduce((total: number, guest: IGuest) => {
      return total + guest.quantityCompany + 1;
    }, 0) ?? 0;

  const loadEvent = useCallback(() => {
    const event = mockEvents.find(
      (event) => event.id === id && event.password === password
    );
    setEvent(event ?? null);
  }, [id, password]);

  useEffect(() => {
    loadEvent();
  }, [loadEvent]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <EventDashboard
          event={event}
          confirmedGuests={confirmedGuests}
          absentGuests={absentGuests}
          totalGuests={totalGuests}
        />
      ) : (
        <PasswordEventForm />
      )}
    </div>
  );
}
