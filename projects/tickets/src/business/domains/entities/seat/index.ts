import * as DDataStructure from "@duplojs/lang/dataStructure";
import * as DModeling from "@duplojs/lang/modeling";
import * as DPattern from "@duplojs/lang/pattern";
import * as DEither from "@duplojs/lang/either";
import { Client } from "../client";
import { Event } from "../event";
import type { CreateSeatFact, SellSeatFact } from "./facts";

export * from "./facts";

export namespace Seat {
	const namespace = DModeling.createEntityNamespace("Seat");

	export const Id = namespace.createNewType(
		"Id",
		DDataStructure.string(),
		[DDataStructure.uuid()],
	);
	export type Id = DDataStructure.StructureValue<typeof Id>;

	export const Position = namespace.createNewType(
		"Position",
		DDataStructure.string(),
		[DDataStructure.regex(/^[A-Z][1-9]\d*$/)],
	);
	export type Position = DDataStructure.StructureValue<typeof Position>;

	export const AvailableState = DModeling.createTaggedObject(
		"AvailableState",
		{},
	);
	export type AvailableState = DDataStructure.StructureValue<typeof AvailableState>;

	export const SoldState = DModeling.createTaggedObject(
		"SoldState",
		{
			ownerId: Client.Id,
		},
	);
	export type SoldState = DDataStructure.StructureValue<typeof SoldState>;

	export const Entity = namespace.createEntity(() => ({
		id: Id,
		eventId: Event.Id,
		position: Position,
		state: DDataStructure.union([
			AvailableState,
			SoldState,
		]),
	}));
	export type Entity = DDataStructure.StructureValue<typeof Entity>;

	export type Facts = CreateSeatFact | SellSeatFact;

	export const AvailableFlag = DModeling.createFlag<
		"Available",
		AvailableState,
		typeof Entity
	>("Available");
	export type AvailableFlag = DModeling.GetFlag<typeof AvailableFlag>;

	export const SoldFlag = DModeling.createFlag<
		"Sold",
		SoldState,
		typeof Entity
	>("Sold");
	export type SoldFlag = DModeling.GetFlag<typeof SoldFlag>;

	export function refineState<
		GenericEntity extends Entity,
	>(seat: GenericEntity) {
		return DPattern.matchWithTaggedObject(
			seat.state,
			{
				AvailableState: (state) => DEither.result(
					"AvailableState",
					AvailableFlag.append(seat, state),
				),

				SoldState: (state) => DEither.result(
					"SoldState",
					SoldFlag.append(seat, state),
				),
			},
		);
	}
}
