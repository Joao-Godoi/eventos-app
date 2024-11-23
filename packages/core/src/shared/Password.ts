export default class Password {
  static generate(size: number = 15): string {
    const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specials = "!@#$%&*";
    const characters = [upperCharacters, lowerCharacters, numbers, specials];
    const password = [];

    for (let i = 0; i < size; i++) {
      const character =
        characters[Math.floor(Math.random() * characters.length)];
      password.push(character[Math.floor(Math.random() * character.length)]);
    }

    return password.join("");
  }
}
