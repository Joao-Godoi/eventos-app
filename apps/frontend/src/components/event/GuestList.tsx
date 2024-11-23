import { IGuest } from "@/core";
import GuestItem from "./GuestItem";

export interface IGuestListProps {
  guests: IGuest[];
}

export default function GuestList(props: IGuestListProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.guests.map((guest: IGuest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
