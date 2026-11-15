import * as DSCommand from "@duplojs/server/command";
// imports commands...

await DSCommand.exec(
	{
		displayName: "tickets",
		description: "Manage seat sells",
		//subjects: [/** add commands  */],
	},
	() => {},
);
