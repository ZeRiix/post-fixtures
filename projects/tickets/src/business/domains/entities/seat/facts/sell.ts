import * as DModeling from "@duplojs/lang/modeling";
import * as DCommon from "@duplojs/lang/common";
import { Seat } from "..";
import { type Client } from "../../client";

export const SellSeatFact = DModeling.createFact<
	"SeatSold",
	{
		state: Seat.SoldState;
	},
	typeof Seat.Entity
>("SeatSold")(
	({ applyFact }) => (
		params: {
			seat: Seat.Entity & Seat.AvailableFlag;
			client: Client.Entity;
		},
	) => {
		const state = Seat.SoldState.new({
			ownerId: params.client.id,
		});
		const payload = { state };

		return DCommon.pipe(
			params.seat,
			Seat.Entity.update(payload),
			Seat.SoldFlag.append(state),
			applyFact(payload),
		);
	},
);
export type SellSeatFact = DModeling.GetFact<typeof SellSeatFact>;
