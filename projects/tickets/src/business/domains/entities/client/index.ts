import * as DDataStructure from "@duplojs/lang/dataStructure";
import * as DModeling from "@duplojs/lang/modeling";

export namespace Client {
	const namespace = DModeling.createEntityNamespace("Client");

	export const Id = namespace.createNewType("Id", DDataStructure.string(), [DDataStructure.uuid()]);
	export type Id = DDataStructure.StructureValue<typeof Id>;

	export const FirstName = namespace.createNewType("FirstName", DDataStructure.string(), [
		DDataStructure.minCharacters(2),
		DDataStructure.maxCharacters(25),
	]);
	export type FirstName = DDataStructure.StructureValue<typeof FirstName>;

	export const LastName = namespace.createNewType("LastName", DDataStructure.string(), [
		DDataStructure.minCharacters(2),
		DDataStructure.maxCharacters(40),
	]);
	export type LastName = DDataStructure.StructureValue<typeof LastName>;

	export const Entity = namespace.createEntity(() => ({
		id: Id,
		firstName: FirstName,
		lastName: LastName,
	}));
	export type Entity = DDataStructure.StructureValue<typeof Entity>;
}
