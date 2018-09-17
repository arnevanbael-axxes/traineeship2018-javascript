import Message from "./message";

export default class Inbox {
    constructor(id, p1, p2) {
        this.id = id;
        this.p1 = p1;
        this.p2 = p2;
        this.messages = [];
    }

    send(message, sender) {
        this.messages.push(new Message(message, sender, p1.id === sender.id ? p1 : p2, p1.id === sender.id ? p2 : p1));
    }

    deleteMessage(message) {
        this.messages = this.messages.filter((m) => message.id !== m.id);
    }

    visualize() {
        let result = '';
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].sender.id === this.p1.id) {
                result += this.messages[i].text;
            } else {
                result +=`${this.messages[i].date} 
                                ${this.messages[i].text}`;
            }
            result += '\n\n';
        }

        return result;
    }
}