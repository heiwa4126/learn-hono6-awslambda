import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { api } from "./api1";

const app = new Hono();
app.route("/", api);
export const handler = handle(app);
