import * as DModeling from "@duplojs/lang/modeling";
import { Seat } from "..";
import { type Event } from "../../event";
import * as DCommon from "@duplojs/lang/common";

export const CreateSeatFact = DModeling.createFact<
	"SeatCreated",
	{
		id: Seat.Id;
		eventId: Event.Id;
		position: Seat.Position;
		state: Seat.AvailableState;
	},
	typeof Seat.Entity
>("SeatCreated")(
	({ applyFact }) => (
		params: {
			id: Seat.Id;
			eventId: Event.Id;
			position: Seat.Position;
		},
	) => {
		const state = Seat.AvailableState.new({});
		const payload = {
			id: params.id,
			eventId: params.eventId,
			position: params.position,
			state,
		};

		return DCommon.pipe(
			payload,
			Seat.Entity.new,
			Seat.AvailableFlag.append(state),
			applyFact(payload),
		);
	},
);
export type CreateSeatFact = DModeling.GetFact<typeof CreateSeatFact>;
