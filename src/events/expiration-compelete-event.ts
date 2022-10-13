import { Subjects } from "./subjects";

export interface ExpirationCompeleteEvent {
    subject: Subjects.ExpirationComplete;
    data: {
        orderId: string;
    };
} 