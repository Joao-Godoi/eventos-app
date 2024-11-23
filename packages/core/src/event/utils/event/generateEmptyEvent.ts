import { Id } from "../../../shared";
import IEvent from "../../models/IEvent";

export default function generateEmptyEvent(): Partial<IEvent> {
  return {
    id: Id.generate(),
    name: "",
    date: new Date(),
    location: "",
    description: "",
    image: "",
    backgroundImage: "",
  };
}
