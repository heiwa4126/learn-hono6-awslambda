import { format } from "date-fns";
import { Hono } from "hono";

export const api = new Hono();

api.get("/", (c) => c.text("Hello Hono!"));
api.get("/hello", (c) => c.text("Hello world!"));
api.get("/date", (c) => c.json({ date: format(new Date(), "yyyy-MM-dd HH:mm:ss") }));
