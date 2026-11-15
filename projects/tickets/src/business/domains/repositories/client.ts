import type * as DEither from "@duplojs/lang/either";
import type * as DInvocation from "@duplojs/lang/invocation";
import type { Client } from "../entities";

export interface ClientRepository {
	findById(id: Client.Id): Promise<DEither.Maybe<Client.Entity & DInvocation.Evidence<"client-found">>>;
}
