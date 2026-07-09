/// <reference types="bun-types" />

import { Hono } from "hono";
import { api } from "../lambda/api1";

const app = new Hono().route("/", api);

const port = Number(Bun.env.PORT ?? 3000);

const server = Bun.serve({
	fetch: app.fetch,
	port,
});

console.log(`Server is running on ${server.url}`);
