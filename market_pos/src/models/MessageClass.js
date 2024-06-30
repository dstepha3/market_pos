export class MessageEntry {
  constructor(message, date, author, level) {
    this.message = message
    this.date = date.toDateString()
    this.author = author
    this.level = level
  }
}
