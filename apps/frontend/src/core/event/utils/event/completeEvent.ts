import { Id, Password } from "@/core/shared";
import IEvent from "../../models/IEvent";
import validateEvent from "./validateEvent";

export default function completeEvent(partialEvent: Partial<IEvent>): IEvent {
  const errors = validateEvent(partialEvent);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  return {
    ...partialEvent,
    id: partialEvent.id ?? Id.generate(),
    password: partialEvent.password ?? Password.generate(),
    limitGuests: +(partialEvent.limitGuests ?? 1),
  } as IEvent;
}
