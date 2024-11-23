import IGuest from "../../models/IGuest";
import validateGuest from "./validateGuest";

export default function completeGuest(partialGuest: Partial<IGuest>): IGuest {
  const errors = validateGuest(partialGuest);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  const quantityCompany = partialGuest.quantityCompany ?? 0;

  return {
    ...partialGuest,
    quantityCompany: quantityCompany > 0 ? quantityCompany : 0,
    hasCompany: partialGuest.confirmed && quantityCompany > 0,
  } as IGuest;
}
