export default class IdGenerator {
  static get novo(): number {
    return Math.floor(Math.random() * (100 - 7 + 1) + 7);
  }
}
