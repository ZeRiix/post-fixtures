import type { Client, Seat, Event } from "../../business/domains";

export const database = {
	client: new Map<string, Client.Entity>(),
	seat: new Map<string, Seat.Entity>(),
	event: new Map<string, Event.Entity>(),
};
