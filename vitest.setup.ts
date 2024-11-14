import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./src/api/mocks/node.js";

beforeAll(() => {
	server.listen();
});

afterEach(() => {
	server.resetHandlers();
});

afterAll(() => {
	server.close();
});
