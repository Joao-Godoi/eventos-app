export default class DateUtil {
  static formatDate(date: Date = new Date()): string {
    const pad = (number: number) => number.toString().padStart(2, "0");

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  static parseDate(dateString: string): Date {
    const [year, month, day, hours, minutes] = dateString
      .split(/[-T:]/)
      .map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  }
}
