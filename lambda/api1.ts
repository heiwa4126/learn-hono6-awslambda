import { Temporal } from "@js-temporal/polyfill";
import { cowsay } from "cowsayjs";
import { Hono } from "hono";

export const api = new Hono()
	.get("/api1", (c) => c.text("Hello Hono!"))
	.get("/", (c) => c.text("Hello Hono!"))
	.get("/hello", (c) => c.text("Hello world!"))
	.get("/date", (c) => c.json({ date: Temporal.Now.zonedDateTimeISO("UTC").toString() }))
	.get("/cowsay", (c) => c.text(cowsay("hello")));
