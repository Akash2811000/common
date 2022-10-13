"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
class Publisher {
    constructor(client) {
        this.client = client;
    }
    publish(data) {
        return new Promise((resolve, rejects) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) {
                    return rejects(err);
                }
                console.log('Event published ', this.subject, JSON.stringify(data));
                resolve();
            });
        });
    }
}
exports.Publisher = Publisher;
