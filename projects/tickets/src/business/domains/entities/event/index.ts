import * as DDataStructure from "@duplojs/lang/dataStructure";
import * as DModeling from "@duplojs/lang/modeling";

export namespace Event {
	const namespace = DModeling.createEntityNamespace("Event");

	export const Id = namespace.createNewType("Id", DDataStructure.string(), [DDataStructure.uuid()]);
	export type Id = DDataStructure.StructureValue<typeof Id>;

	export const Name = namespace.createNewType("Name", DDataStructure.string(), [
		DDataStructure.minCharacters(2),
		DDataStructure.maxCharacters(150),
	]);
	export type Name = DDataStructure.StructureValue<typeof Name>;

	export const StartAs = namespace.createNewType("StartAs", DDataStructure.date());
	export type StartAs = DDataStructure.StructureValue<typeof StartAs>;

	export const Entity = namespace.createEntity(() => ({
		id: Id,
		name: Name,
		startAs: StartAs,
	}));
	export type Entity = DDataStructure.StructureValue<typeof Entity>;
}
