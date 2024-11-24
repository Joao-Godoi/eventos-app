interface IGuest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    hasCompany: boolean;
    quantityCompany: number;
}

interface IEvent {
    id: string;
    alias: string;
    password: string;
    name: string;
    date: Date;
    location: string;
    description: string;
    image: string;
    backgroundImage: string;
    limitGuests: number;
    guests: IGuest[];
}

declare function completeGuest(partialGuest: Partial<IGuest>): IGuest;

declare function completeEvent(partialEvent: Partial<IEvent>): IEvent;

declare function generateEmptyEvent(): Partial<IEvent>;

declare function generateEmptyGuest(): Partial<IGuest>;

declare const mockEvents: IEvent[];

declare class Alias {
    static format(value: string): string;
}

declare class Id {
    static generate(): string;
    static isValid(id: string): boolean;
}

declare class Password {
    static generate(size?: number): string;
}

declare class DateUtil {
    static formatDate(date?: Date): string;
    static parseDate(dateString: string): Date;
}

export { Alias, DateUtil, type IEvent, type IGuest, Id, Password, completeEvent, completeGuest, generateEmptyEvent, generateEmptyGuest, mockEvents };
