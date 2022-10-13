import { Subjects } from "./subjects";
import { Stan } from "node-nats-streaming";
import { resolve } from "path";
import { rejects } from "assert";

interface Event {
    subject: Subjects;
    data: any;
}


export abstract class Publisher<T extends Event> {
    abstract subject: T['subject'];
    protected client: Stan;

    constructor(client: Stan) {
        this.client = client
    }

    publish(data: T['data']): Promise<void> {

        return new Promise((resolve, rejects) => {

            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) {
                    return rejects(err);
                }
                console.log('Event published ', this.subject , JSON.stringify(data));
                resolve();
            })

        })
    }
}