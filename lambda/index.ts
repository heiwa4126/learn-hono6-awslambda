import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));
app.get("/hello", (c) => c.text("Hello world!"));

export const handler = handle(app);
