import IGuest from "../../models/IGuest";

export default function validateGuest(guest: Partial<IGuest>): string[] {
  const errors: string[] = [];

  const requiredFields: [keyof IGuest, string][] = [
    ["name", "Name is required"],
    ["email", "Email is required"],
  ];

  requiredFields.forEach(([field, message]) => {
    if (
      !guest[field] ||
      (typeof guest[field] === "string" && guest[field].trim() === "")
    ) {
      errors.push(message);
    }
  });

  return errors;
}
