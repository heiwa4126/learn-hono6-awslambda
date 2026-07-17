/// <reference types="bun-types" />
import { describe, expect, test } from "bun:test";
import { api } from "../lambda/api1";

describe("api1", () => {
	test("GET /api1 returns Hello Hono!", async () => {
		const res = await api.request("/api1");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello Hono!");
	});

	test("GET / returns Hello Hono!", async () => {
		const res = await api.request("/");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello Hono!");
	});

	test("GET /hello returns Hello world!", async () => {
		const res = await api.request("/hello");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello world!");
	});

	test("GET /date returns JSON with date field", async () => {
		const res = await api.request("/date");
		expect(res.status).toBe(200);
		const body = await res.json();
		expect(body).toHaveProperty("date");
		expect(typeof body.date).toBe("string");
		expect(body.date).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
	});

	test("GET /cowsay returns cowsay output containing 'hello'", async () => {
		const res = await api.request("/cowsay");
		expect(res.status).toBe(200);
		const body = await res.text();
		expect(body).toContain("hello");
	});
});
