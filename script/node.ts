import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { api } from "../lambda/api1";

const app = new Hono();
app.route("/", api);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
	fetch: app.fetch,
	port,
});
