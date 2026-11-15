import type * as DEither from "@duplojs/lang/either";
import type * as DInvocation from "@duplojs/lang/invocation";
import type { Seat } from "../entities";

export interface SeatRepository {
	findById(id: Seat.Id): Promise<DEither.Maybe<Seat.Entity & DInvocation.Evidence<"seat-found">>>;
}
