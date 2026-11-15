import * as DInvocation from "@duplojs/lang/invocation";
import * as DCommon from "@duplojs/lang/common";
import * as DEither from "@duplojs/lang/either";
import { type Seat, SellSeatFact } from "../entities";
import type { SeatRepository, ClientRepository } from "../repositories";

export const sellSeat = DInvocation.createWorkflow(
	({ commit }) => function *(
		params: {
			client: DInvocation.GetEvidenceResult<
				ClientRepository["findById"],
				"client-found"
			>;
			seat: (
				& DInvocation.GetEvidenceResult<
					SeatRepository["findById"],
					"seat-found"
				>
				& Seat.AvailableFlag
			);
		},
	) {
		const soldOut = DCommon.pipe(
			params,
			SellSeatFact.run,
			DEither.unwrapRight,
		);

		yield *commit("seat", soldOut);

		return soldOut;
	},
);
