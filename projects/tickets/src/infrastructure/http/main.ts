import * as DCommon from "@duplojs/lang/common";
import { createHub, routeStore } from "@duplojs/http";
import { createHttpServer } from "@duplojs/http/node";

import "./routes";

const hub = createHub({
	environment: "DEV",
})
	.register(routeStore.getAll());

await createHttpServer(
	hub,
	{
		host: "0.0.0.0",
		port: 1380,
	},
)
	.then(
		() => void DCommon.print("app is running !"),
	);
