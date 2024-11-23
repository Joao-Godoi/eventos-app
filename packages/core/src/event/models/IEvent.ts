import Guest from "./IGuest";

export default interface IEvent {
  id: string;
  alias: string;
  password: string;
  name: string;
  date: Date;
  location: string;
  description: string;
  image: string;
  backgroundImage: string;
  limitGuests: number;
  guests: Guest[];
}
