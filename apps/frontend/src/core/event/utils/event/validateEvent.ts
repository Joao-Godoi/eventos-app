import IEvent from "../../models/IEvent";

export default function validateEvent(event: Partial<IEvent>): string[] {
  const errors: string[] = [];

  const requiredFields: [keyof IEvent, string][] = [
    ["alias", "Alias is required"],
    ["name", "Name is required"],
    ["location", "Location is required"],
    ["description", "Description is required"],
    ["image", "Image is required"],
    ["backgroundImage", "Background image is required"],
  ];

  requiredFields.forEach(([field, message]) => {
    if (
      !event[field] ||
      (typeof event[field] === "string" && event[field].trim() === "")
    ) {
      errors.push(message);
    }
  });

  if (!event.date || event.date < new Date()) {
    errors.push("Date must be a future date");
  }

  if (typeof event.limitGuests !== "number" || event.limitGuests <= 0) {
    errors.push("Limit guests must be a positive number");
  }

  if (
    event.guests &&
    event.limitGuests &&
    event.guests.length > event.limitGuests
  ) {
    errors.push("Number of guests exceeds limit");
  }

  return errors;
}
