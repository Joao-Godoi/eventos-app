import { IGuest } from "core";

export interface IGuestItemProps {
  guest: IGuest;
}

export default function GuestItem(props: IGuestItemProps) {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{props.guest.name}</span>
        <span className="text-sm text-zinc-400">{props.guest.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Acompanhantes</span>
        <span className="text-xl font-bold">{props.guest.quantityCompany}</span>
      </div>
    </li>
  );
}
