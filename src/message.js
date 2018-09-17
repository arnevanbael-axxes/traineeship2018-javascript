export default class Message {
    constructor(text, sender, receiver) {
        this.text = text;
        this.sender = sender;
        this.receiver = receiver;
        this.id = new Date().toString().replace(/\w/g, '');
        this.date = new Date();
    }
}