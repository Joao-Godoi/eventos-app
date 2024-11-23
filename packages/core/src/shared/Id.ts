export default class Id {
  static generate(): string {
    return `${this.generateHash()}-${this.generateHash()}-${this.generateHash()}`;
  }

  private static generateHash(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
