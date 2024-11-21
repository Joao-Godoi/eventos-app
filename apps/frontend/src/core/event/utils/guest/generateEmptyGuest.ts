import { Id } from "@/core/shared";
import IGuest from "../../models/IGuest";

export default function generateEmptyGuest(): Partial<IGuest> {
  return {
    id: Id.generate(),
    name: "",
    email: "",
    confirmed: true,
    hasCompany: true,
    quantityCompany: 0,
  };
}
