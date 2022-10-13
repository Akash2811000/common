"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listner = void 0;
class Listner {
    constructor(client) {
        this.ackWait = 5 * 1000;
        this.client = client;
    }
    subscriptionOptions() {
        return this.client.subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    }
    listen() {
        console.log('subject inside listen', this.subject);
        const subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        subscription.on('message', (msg) => {
            console.log(`message recived : ${this.subject}  / queue grop : ${this.queueGroupName}`);
            const parsedData = this.parseMessage(msg);
            this.onMessage(parsedData, msg);
        });
    }
    parseMessage(msg) {
        const data = msg.getData();
        return typeof data == 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf-8'));
    }
}
exports.Listner = Listner;
