import { cowsay } from "cowsayjs";
import { format } from "date-fns";
import { Hono } from "hono";

export const api = new Hono()
	.get("/api1", (c) => c.text("Hello Hono!"))
	.get("/", (c) => c.text("Hello Hono!"))
	.get("/hello", (c) => c.text("Hello world!"))
	.get("/date", (c) => c.json({ date: format(new Date(), "yyyy-MM-dd HH:mm:ss") }))
	.get("/cowsay", (c) => c.text(cowsay("hello")));
