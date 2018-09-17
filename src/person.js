export default class Person {
    constructor(id, name, nickname) {
        this.id = id;
        this.name = name;
        this.nickname = !!nickname ? '' : nickname;
        this.inboxes = [];

    }

    set name (newName) {this.name = newName;}
    set nickname (newNickname) {this.nickname = newNickname;}

    addInbox(receiver) {
        this.inboxes.push(new Inbox(this.inboxes.length, this, receiver));
    }

    send(message, inboxId) {
        let inboxes = this.inboxes.filter((i) => i.id == inboxId);
        if(inboxes.length === 1) {
            inboxes[0].send(message, this);
        }
    }
}